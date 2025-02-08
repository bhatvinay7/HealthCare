/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
        from: { backgroundPosition: 'left -60px top 0' },
          to: { backgroundPosition: 'right -40px top 0' },
        },
      },
      animation: {
        shine: 'shine 1.25s ease-in infinite',
      },

      backgroundImage:{
        bookAppoint :'url("/public/appointment-book.png")',
        mgnifyingGlass :'url("/public/magnifying glass.svg")',
        bookCheckUp :'url("/public/bookCheckUp.png")',
        ByMedicine: 'url("/public/medicine.png")', 
        consultOnline:'url("/public/consultOnline.png")',
      }
    },
  },
  plugins: [],
}

