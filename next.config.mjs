/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  images: {
    domains: [
      'localhost:3000',
      'localhost',
      'flaer-website-assets.s3.ap-south-1.amazonaws.com',
    ],
  },
};

export default nextConfig;
