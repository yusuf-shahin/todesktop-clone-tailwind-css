/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // shahin: "#A0D0AD",
        primary: "#3238f2",
      },
      fontFamily: {
        // yushah: "Poppins",
        // random: "Playwrite Hrvatska Lijeva Guides",
        display: "Poppins",
        body: "Inter",
      },
    },
  },
  plugins: [],
}
