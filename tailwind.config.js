/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/**/*.blade.php",
  ],
  theme: {
    extend: {
        font: {
            sans: ['Segoe UI', 'Roboto', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
