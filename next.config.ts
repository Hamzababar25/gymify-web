import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static site (Cloudflare Pages): `next build` writes everything to `out/`.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

