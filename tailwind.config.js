/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'zen-dots': ['"Zen Dots"', 'cursive'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      backgroundImage:{
        Hero:"url('assets/images/global-business.png')",
        Team_bg:"url('assets/images/team_bg.png')",
        Mesh:"url('assets/images/mesh-testimonials-blockchain.png')",
        Tokenomics:"url('assets/images/tokenomics_bg.png')",
        Road:"url('assets/images/road.png')",
        Banner:"url('assets/images/bg-banner.png')",
        Hero_bg:"url('assets/images/hero_right_image.png')",
        'button-gradient': 'linear-gradient(180deg, #D40000 0%, #6E0000 100%)',
        'gradient': 'linear-gradient(90.37deg, rgba(255, 255, 255, 0.52) 10.97%, rgba(243, 243, 243, 0.29) 100%)'
        
      
      },
      borderImageSource: {
        'gradient': 'linear-gradient(86.91deg, #77D9FF 8.72%, #3091EE 94.71%)',
      },
      borderWidth: {
        'custom': '2.14px',
      },
    },
  },
  plugins: [],
}

