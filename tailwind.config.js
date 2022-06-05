module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
    themes: [
      {
        light: {
          
          "primary": "#0ea5e9",
                   
          "secondary": "#ea580c",
                   
          "accent": "#1FB2A6",
                   
          "neutral": "#111827",
                   
          "base-100": "#d1d5db",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
                   },
        dark:{   
          "primary": "#312e81",
                   
          "secondary": "#ea580c",
                   
          "accent": "#37CDBE",
                   
          "neutral": "#3D4451",
                   
          "base-100": "#111827",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",

      }}
    ],
  },
  plugins: [require("daisyui")],
 
}
