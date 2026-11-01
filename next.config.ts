import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Forces Next.js to compile your portfolio into pure HTML/CSS/JS assets
  trailingSlash: true,
  images: {
    unoptimized: true, // Required because GitHub Pages cannot run the live Next.js Image optimization server
  },
};

export default nextConfig;
