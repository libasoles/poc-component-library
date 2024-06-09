/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{tsx,mdx}", "./components/**/*.{tsx,mdx}"],
  theme: {
    colors: {
      ...colors,
      gray: {
        800: "#2f2f2f",
      },
      slate: {
        800: "#202939",
      },
    },
  },
  plugins: [],
  safelist: [
    "size",
    {
      pattern: /(w|h)-(4|6)/,
    },
    "text",
    {
      pattern: /text-(white|neutral|red|green|blue)-(100|200|300|400|500)/,
      variants: ["hover", "focus"],
    },
    "bg",
    {
      pattern: /bg-(red|green|blue)-(100|200|300|400|500)/,
      variants: ["hover", "focus"],
    },
    "border-color",
    {
      pattern: /border-(red|green|blue)-(100|200|300|400|500)/,
      variants: ["hover", "focus"],
    },
  ],
};
