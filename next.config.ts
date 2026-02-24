import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   typescript: {
    // Completely ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  reactCompiler: true,
};

export default nextConfig;
