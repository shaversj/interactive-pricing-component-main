/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      colors: {
        "temp-bg": "hsl(217, 92%, 97%)",
        "primary-soft-cyan": "hsl(174, 77%, 80%)",
        "primary-strong-cyan": "hsl(174, 86%, 45%)",
        "primary-light-grayish-red": "hsl(14, 92%, 95%)",
        "primary-light-red": "hsl(15, 100%, 70%)",
        "primary-discount-red": "hsl(360, 100%,96%)",
        "primary-pale-blue": "hsl(226, 100%, 87%)",
        "neutral-very-pale-blue": "hsl(230, 100%, 99%)",
        "neutral-light-grayish-blue": "hsl(224, 65%, 95%)",
        "neutral-light-grayish-blue-toggle": "hsl(223, 50%, 87%)",
        "neutral-grayish-blue": "hsl(225, 20%, 60%)",
        "neutral-dark-desaturated-blue": "hsl(227, 35%, 25%)",
        "neutral-line-color": "hsl(228,48%,96%)",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
