import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/terms-and-conditions',
        destination: '/legal/terms-and-conditions',
      },
      {
        source: '/privacy-policy',
        destination: '/legal/privacy-policy',
      },
      {
        source: '/refund-policy',
        destination: '/legal/refund-policy',
      },
      {
        source: '/certification-policy',
        destination: '/legal/certification-policy',
      },
    ]
  },
};

export default nextConfig;
