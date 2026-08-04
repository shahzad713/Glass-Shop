import { Resend } from "resend";

/**
 * Serverless contact endpoint (Vercel Node function).
 *
 * Security posture:
 * - Server-only RESEND_API_KEY (never VITE_-prefixed, never in client bundle).
 * - POST only; small JSON body cap; honeypot; in-memory best-effort rate limit.
 * - All user input validated, length-capped and HTML-escaped before it is
 *   placed into the email body. No user value is interpolated unescaped.
 */

export const config = { runtime: "nodejs" };

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "asifmunir062@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
const MAX_BODY_BYTES = 8 * 1024; // 8 KB
const RATE_LIMIT = 5; // requests
const RATE_WINDOW_MS = 60 * 1000; // per minute per IP

// Best-effort in-memory limiter. Serverless instances are ephemeral, so this
// only throttles bursts hitting a warm instance; Vercel platform limits and
// the honeypot provide the primary abuse protection.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > RATE_LIMIT;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strip C0 control characters (code points 0-31) except tab (9) and newline
 * (10), then trim and cap length. Char-code filtering avoids embedding literal
 * control bytes in a regex literal.
 */
function clean(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  let out = "";
  for (const ch of v) {
    const code = ch.charCodeAt(0);
    if (code < 32 && code !== 9 && code !== 10) continue;
    out += ch;
  }
  return out.trim().slice(0, max);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function safeParse(s: string): Record<string, unknown> {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Body size guard (Vercel already parses JSON; guard the stringified size).
  const raw =
    typeof req.body === "string" ? req.body : JSON.stringify(req.body ?? {});
  if (raw.length > MAX_BODY_BYTES) {
    return res.status(413).json({ error: "Request too large" });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").toString().split(",")[0].trim() ||
    "unknown";
  if (rateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Too many requests. Please try again shortly." });
  }

  const body =
    typeof req.body === "string" ? safeParse(req.body) : req.body || {};

  // Honeypot: real users never fill "company". Pretend success for bots.
  if (clean(body.company, 100)) {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 120);
  const area = clean(body.area, 120);
  const message = clean(body.message, 3000);

  if (!name || !phone || !message) {
    return res
      .status(400)
      .json({ error: "Please provide your name, phone and requirement." });
  }
  if (email && !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service is not configured yet." });
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New website enquiry &mdash; Labbyak Glass &amp; Aluminium</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">
      <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${esc(phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email ? esc(email) : "-"}</td></tr>
      <tr><td><strong>Area</strong></td><td>${area ? esc(area) : "-"}</td></tr>
      <tr><td valign="top"><strong>Message</strong></td><td>${esc(message).replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;
  const text = `New website enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "-"}\nArea: ${area || "-"}\n\nMessage:\n${message}`;

  try {
    const { error } = await resend.emails.send({
      from: `Labbyak Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email && EMAIL_RE.test(email) ? email : undefined,
      subject: `New enquiry from ${name}${area ? ` (${area})` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return res
        .status(502)
        .json({ error: "Could not send your message. Please call or WhatsApp us." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact handler error:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
