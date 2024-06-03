/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-scrollbar::-webkit-scrollbar": {
          height: "8px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          background: "#f1f1f1",
          "border-radius": "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          background: "#888",
          "border-radius": "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
        /* For Firefox */
        ".custom-scrollbar": {
          "scrollbar-width": "thin",
          "scrollbar-color": "#888 #f1f1f1",
        },
      });
    },
  ],
};
