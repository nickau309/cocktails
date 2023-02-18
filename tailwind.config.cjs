/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        load: "load 1s ease-in-out infinite",
      },
      keyframes: {
        load: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(100%)",
          },
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
