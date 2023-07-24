/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("/images/hero-bg.jpg")',
        cpu: 'url("/images/cpu.jpg")',
        qr: 'url("/images/qr-transparent.png")',
      },
      colors: {
        semiblack: "#2B2D42",
        redprimary: "#EF233C",
        redsecondary: "#D90429",
        whiteprimary: "#EDF2F4",
        whitesecondary: "#8D99AE",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)"],
        open: ["var(--font-open)"],
      },
    },
  },
  plugins: [],
}
