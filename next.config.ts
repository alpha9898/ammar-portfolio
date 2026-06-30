import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // static export → drop-in on Vercel / S3 / Cloudflare Pages
};

export default nextConfig;
