import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // Dark gray for the main background
        secondary: '#374151', // Slightly lighter gray for secondary elements
        accent: '#6b7280', // Gray for text and other UI elements
        highlight: '#a3a3a3', // Light gray for highlights
        link: '#2563eb', // Blue for links and interactive elements
        error: '#ef4444', // Red for error messages
        'font-primary': '#f3f4f6', // Light gray for primary font color
        'font-secondary': '#d1d5db', // Slightly darker gray for secondary font color
        'font-accent': '#9ca3af', // Gray for accent font color
        'font-inverted': '#111827', // inverted font color on for light backgrounds
      },
    },
  },
  plugins: [],
};
export default config;
