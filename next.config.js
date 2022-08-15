/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/projects",
  assetPrefix: "/projects/",
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
