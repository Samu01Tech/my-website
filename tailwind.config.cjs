/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      minHeight: {
        // 4 rem is the height of the header
        "safe-screen": "calc(100vh - 4rem)",
      },
      colors: {
        primary: {
          500: "var(--md-sys-color-primary)",
        },
        "on-primary": {
          500: "var(--md-sys-color-on-primary)",
        },
        surface: {
          500: "var(--md-sys-color-surface)",
        },
        "on-surface": {
          500: "var(--md-sys-color-on-surface)",
        },
      }
    },
    screens: {
      sm: "600px",
      md: "905px",
      lg: "1240px",
      xl: "1440px",
    },
  },
  plugins: [],
};
