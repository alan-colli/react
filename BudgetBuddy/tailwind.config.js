/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D1B2A", // Green
        secondary: "#415A77", // Orange
        third: "#1B263B", // Amber
        fourth: "#778DA9", // Light Gray
        text: "#E0E1DD", // Dark Gray
        positive: "#37FF00", // Positive Balance Green
        negative: "#FF0000", // Negative Balance Red
      },
    },
  },
  plugins: [],
};
