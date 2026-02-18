/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      colors: {
        brand: {
          ivory: "#F6F1E8",
          ink: "#0B0F14",
          gold: "#C9A24A",
          green: "#2FA84F",
          line: "rgba(11,15,20,.10)",
        },
      },
    },
  },
  plugins: [],
};
