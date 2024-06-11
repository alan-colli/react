/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Green
        secondary: "#FF9800", // Orange
        accent: "#FFC107", // Amber
        background: "#F5F5F5", // Light Gray
        text: "#333333", // Dark Gray
        positive: "#4CAF50", // Positive Balance Green
        negative: "#F44336", // Negative Balance Red
      },
    },
  },
  plugins: [],
};
