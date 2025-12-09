import React, { useState } from "react";
import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

interface ContactProps {
  isPage?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isPage = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create formatted email content
      const emailBody = `
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Message: ${formData.message}

---
Sent from: Labbyak Glass & Aluminum Website
      `.trim();

      // Send using mailto (user's email client will open)
      const subject = `New Quote Request from ${formData.name}`;
      const mailtoLink = `mailto:asifmunir062@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Reset form after short delay
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          location: "",
          message: "",
        });
        setSubmitStatus("success");

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }, 500);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`bg-apple-gray relative ${isPage ? "pt-32 pb-24" : "py-24"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl font-bold text-apple-dark mb-4">
              Start Your Project With Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Ready to transform your space? Contact Labbyak Glass & Aluminum
              for a free consultation and quote in Lahore.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <Reveal>
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-apple-dark mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      <MapPin className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-dark">
                        Shop & Office
                      </h4>
                      <p className="text-gray-500 text-sm mt-1">
                        Toheed Block, Bahria Town
                        <br />
                        Lahore, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      <Phone className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-dark">Phone</h4>
                      <p className="text-gray-500 text-sm mt-1">
                        +92 302 099 9713
                      </p>
                      <a
                        href="tel:+923020999713"
                        className="text-blue-600 text-xs font-medium mt-1 inline-block"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-dark">
                        WhatsApp
                      </h4>
                      <p className="text-gray-500 text-sm mt-1">
                        Chat for quick quotes
                      </p>
                      <a
                        href="https://wa.me/923020999713?text=Hi,%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 text-xs font-medium mt-1 inline-block hover:underline"
                      >
                        Open WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      <Mail className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-dark">Email</h4>
                      <p className="text-gray-500 text-sm mt-1">
                        asifmunir062@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl overflow-hidden shadow-sm h-[300px] w-full bg-gray-200 relative">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.197730726345!2d74.18429597629948!3d31.353522374290797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391855efdafb81a1%3A0x11a0eb1b9624fbee!2sLabbyak%20Glass%20And%20Aluminum!5e0!3m2!1sen!2sus!4v1765293616212!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Labbyak Glass Location"
                />
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal delay={100}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-apple-dark mb-6">
                Get a Free Quote
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-apple-dark transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-apple-dark transition-colors"
                    placeholder="0300 xxxxxxx"
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Location / Area
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-apple-dark transition-colors"
                    placeholder="e.g. Bahria Town, DHA"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-apple-dark transition-colors"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                    ✅ Request submitted! Opening your email client to complete
                    the submission...
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    ❌ Error submitting request. Please try again.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-apple-dark text-white font-medium py-4 rounded-lg hover:bg-gray-800 transition-transform transform active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
