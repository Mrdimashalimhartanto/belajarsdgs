/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-footer": "url('../images/bg-footer.jpg')",
      },
      colors: {
        hijau: "#009900",
        kuning: "#fefb15",
      },
    },
  },
  plugins: [],
};
