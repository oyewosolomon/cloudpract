import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export mode
  images: {
    unoptimized: true, // Required if using next/image
  },
};

export default nextConfig;
