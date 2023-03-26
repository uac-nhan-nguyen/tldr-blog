/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      borderWidth: {
        '1': "1px",
      },
    },
    fontFamily: {
      'mono': "'Inconsolata', monospace",
    },
  },
  plugins: [],
}
