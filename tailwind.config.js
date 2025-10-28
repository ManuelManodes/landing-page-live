/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'navy-850': 'hsl(217, 28%, 15%)',
        'navy-900': 'hsl(218, 28%, 13%)',
        'navy-950': 'hsl(216, 53%, 9%)',
        'navy-800': 'hsl(219, 30%, 18%)',
        
        // Accent Colors
        'teal-200': 'hsl(176, 68%, 64%)',
        'cyan-500': 'hsl(198, 60%, 50%)',
        'red-500': 'hsl(0, 100%, 63%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
