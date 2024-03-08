import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#00c9ff",
              50: '#effbff',
              100: '#def5ff',
              200: '#b6eeff',
              300: '#75e4ff',
              400: '#2cd7ff',
              500: '#00c9ff',
              600: '#009dd4',
              700: '#007dab',
              800: '#00698d',
              900: '#065774',
              950: '#04374d',
            },
            secondary:{
              DEFAULT: '#00FF4D',
              50: "#E5FFED",
              100: "#CCFFDB",
              200: "#99FFB8",
              300: "#66FF94",
              400: "#33FF70",
              500: "#00FF4D",
              600: "#00CC3D",
              700: "#00992E",
              800: "#00661F",
              900: "#00330F",
              950: "#001908"
            },
            success:{
              DEFAULT: '#97FF00',
              50: "#F5FFE5",
              100: "#EBFFCC",
              200: "#D6FF99",
              300: "#C2FF66",
              400: "#ADFF33",
              500: "#97FF00",
              600: "#7ACC00",
              700: "#5C9900",
              800: "#3D6600",
              900: "#1F3300",
              950: "#0F1900"
            },
            warning:{
              DEFAULT: '#FFB300',
              50: "#FFF7E5",
              100: "#FFF0CC",
              200: "#FFE099",
              300: "#FFD166",
              400: "#FFC233",
              500: "#FFB300",
              600: "#CC8F00",
              700: "#996B00",
              800: "#664700",
              900: "#332400",
              950: "#191200"
            },
            danger:{
              DEFAULT: '#FF2300',
              50: "#FFE9E5",
              100: "#FFD3CC",
              200: "#FFA799",
              300: "#FF7A66",
              400: "#FF4E33",
              500: "#FF2300",
              600: "#CC1B00",
              700: "#991400",
              800: "#660E00",
              900: "#330700",
              950: "#190300"
            },
            
            
            'malibu': {
              '50': '#effbff',
              '100': '#def5ff',
              '200': '#b6eeff',
              '300': '#75e4ff',
              '400': '#2cd7ff',
              '500': '#00c9ff',
              '600': '#009dd4',
              '700': '#007dab',
              '800': '#00698d',
              '900': '#065774',
              '950': '#04374d',
            },

            // ... rest of the colors
          },
        }
      }
    })
  ]
}
