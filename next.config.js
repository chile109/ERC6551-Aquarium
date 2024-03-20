/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  images: {
    domains: ['assets.manifold.xyz']
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  assetPrefix: isProd
    ? 'https://chile109.github.io/ERC6551-Aquarium/'
    : undefined
};

module.exports = nextConfig;
