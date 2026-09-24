import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://img.magnific.com/free-photo/3d-cartoon-business-character_1048-16544.jpg?w=740
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        pathname: '/free-photo/**',
      },
    ],
  },
};

export default nextConfig;
