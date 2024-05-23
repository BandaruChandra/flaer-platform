// /** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [
      'localhost:3000',
      'localhost',
      'flaer-website-assets.s3.ap-south-1.amazonaws.com',
      'i.pinimg.com',
    ],
  },
};

export default nextConfig;
