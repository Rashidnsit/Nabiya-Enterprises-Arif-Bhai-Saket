/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a5f5',
          500: '#0c85e9',
          600: '#0169c7',
          700: '#0155a2',
          800: '#024886',
          900: '#073e71',
          950: '#05264a',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dbe3',
          300: '#adbccc',
          400: '#8096b0',
          500: '#607a96',
          600: '#4c637d',
          700: '#3d5066',
          800: '#344356',
          900: '#2e3a49',
          950: '#1c2330',
        },
        accent: {
          50: '#fef5ee',
          100: '#fde7d4',
          200: '#facaa8',
          300: '#f7a971',
          400: '#f48339',
          500: '#f26113',
          600: '#e34a09',
          700: '#bc370a',
          800: '#962e10',
          900: '#792910',
          950: '#411308',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}