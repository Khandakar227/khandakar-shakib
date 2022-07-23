const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["'Prompt'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
