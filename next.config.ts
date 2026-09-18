import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site has no server-side features, so it deploys anywhere.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;
