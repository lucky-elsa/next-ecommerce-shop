/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "var(--color-primary)",
        "color-secodnary": "var(--color-secondary)",
        "color-like": "var(--color-like)",
        "color-grey": "var(--color-grey",
      },
    },
  },
  plugins: [],
};
