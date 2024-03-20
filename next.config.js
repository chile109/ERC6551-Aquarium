/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/ERC6551-Aquarium",
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ['assets.manifold.xyz']
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
