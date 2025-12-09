/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Dark background
        foreground: '#f0f0f0', // Light text color
        primary: '#00FF00', // Neon Green
        secondary: '#00BFFF', // Neon Blue
        accent: '#1F1F1F', // Slightly lighter background for contrast
        card: '#121212', // Card background
      },
    },
  },
  plugins: [],
};
