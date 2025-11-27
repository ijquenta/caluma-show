import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.flpb2-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "scontent.flpb2-2.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
