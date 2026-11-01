// postcss.config.mjs
const postcssConfig = {
  plugins: {
    '@tailwindcss/postcss': {}, // Hooks Tailwind v4 directly into the Next.js production build engine
  },
};

export default postcssConfig;
