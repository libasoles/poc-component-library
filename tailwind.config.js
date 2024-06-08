/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{tsx,mdx}", "./components/**/*.{tsx,mdx}"],
  theme: {},
  plugins: [],
  safelist: [
    // "text-red-300",
    // "bg-red-500",
    // "bg-blue-500",
    // "border-red-500",
    // "hover:border-red-300",
    "size",
    {
      pattern: /(w|h)-(4|6)/,
    },
    "text",
    {
      pattern: /text-(red|green|blue)-(100|200|300|400|500)/,
      variants: ["hover", "focus"],
    },
    "bg",
    {
      pattern: /bg-(red|green|blue)-(100|200|300|400|500)/,
      variants: ["hover", "focus"],
    },
    "border",
    {
      pattern: /border-(red|green|blue)-(100|200|300|400|500)/,
      variants: ["hover", "focus"],
    },
  ],
};
