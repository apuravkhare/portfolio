import type { NextConfig } from "next";

const isProd = process.env.NODE_ONLY_PRODUCTION === 'production' || process.env.NODE_ENV === 'production';
const repoName = 'portfolio';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Forces Next.js to compile your portfolio into pure HTML/CSS/JS assets
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // Required because GitHub Pages cannot run the live Next.js Image optimization server
  },
  trailingSlash: true,
};

export default nextConfig;
