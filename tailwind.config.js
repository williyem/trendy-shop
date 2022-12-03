/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPink: "#FF6090",
        deepPink: "#cc2155",
        secondaryPink: "#E399AF",
        mainBrown: "#583E3E",
      },
    },
  },
  plugins: [
    // ...
  ],
};
