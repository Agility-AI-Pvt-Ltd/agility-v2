import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/lyfshilp",
        destination: "https://lyfshilp.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
