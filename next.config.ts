import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/why-us',
        destination: '/why-eccoc',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
