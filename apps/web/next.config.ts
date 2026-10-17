import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  typescript: {
    // Type-checking runs in the separate `typecheck` task
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
