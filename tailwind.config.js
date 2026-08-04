/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./data.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        // Deep graphite / charcoal — primary dark surfaces & text
        graphite: {
          50: "#f4f5f6",
          100: "#e5e7e9",
          200: "#cbcfd3",
          300: "#a6adb4",
          400: "#79828c",
          500: "#5b636d",
          600: "#474e56",
          700: "#3a4048",
          800: "#2b3037",
          900: "#1f2933", // primary charcoal
          950: "#141a20",
        },
        // Subtle glass-blue highlight
        glass: {
          50: "#eef7fb",
          100: "#d7ecf5",
          200: "#b3dbec",
          300: "#80c2dd",
          400: "#47a2c7",
          500: "#2a83ab",
          600: "#256b8f",
          700: "#245876",
          800: "#254a62",
          900: "#233e53",
        },
        // Restrained warm bronze accent
        bronze: {
          50: "#faf6f0",
          100: "#f0e6d6",
          200: "#e0cbac",
          300: "#cba97a",
          400: "#bd9160",
          500: "#a97a4c",
          600: "#916240",
          700: "#744d36",
          800: "#614130",
          900: "#54392c",
        },
        // Soft neutral surface
        surface: "#f6f7f8",
        // Legacy aliases (kept so existing utility classes keep working;
        // remapped onto the new architectural palette).
        "apple-gray": "#f4f5f6",
        "apple-dark": "#1f2933",
      },
      boxShadow: {
        card: "0 1px 3px rgba(20,26,32,0.06), 0 1px 2px rgba(20,26,32,0.04)",
        elevated: "0 10px 30px -12px rgba(20,26,32,0.18)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
      },
    },
  },
  plugins: [],
};
