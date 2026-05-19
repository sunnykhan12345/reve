/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        reve: {
          red: "#EF2F2C",
          black: "#101010",
          ink: "#191919",
          muted: "#5C5C66",
          light: "#F6F6F6",
          line: "#E2E2E2",
          blush: "#FFE4E4",
          gold: "#FDBA2B",
        },
      },
      borderRadius: {
        reve: "28px",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 16, 16, 0.08)",
        header: "0 12px 34px rgba(16, 16, 16, 0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
