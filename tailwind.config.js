import plugin from "tw-elements-react/dist/plugin.cjs";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'love': ['loveyou', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [plugin],
};
