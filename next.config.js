/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static.xx.fbcdn.net"],
  },
};

module.exports = nextConfig;
