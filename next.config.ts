import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  output: 'export', // Forces Next.js to compile your portfolio into pure HTML/CSS/JS assets
  images: {
    unoptimized: true, // Required because GitHub Pages cannot run the live Next.js Image optimization server
  },
  trailingSlash: true,
};

export default nextConfig;
