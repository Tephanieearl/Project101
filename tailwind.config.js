import withMT from "@material-tailwind/html/utils/withMT";
/** @type {import('tailwindcss').Config} */

module.exports = withMT( {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js", "./node_modules/preline/preline.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin", ), require('preline/plugin')],

  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        '7': '1.75rem',
      },
      height: {
        'content-test': 'calc(100vh - theme("spacing.7"))',
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
          'brand': `#2AC327 `,
        },
        secondary:{
          'brand': '#006BEB '
        }
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ],

      primary: [
        "ADLaM Display"
      ]
    },

    screens: {
      'xs': '350px',
      'sm': '540px',
      'md': '720px',
      'lg': '920px',
      'xl': '1200px',
      'xxl': '1400px',
    },
  },
});