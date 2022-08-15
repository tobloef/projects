/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/projects",
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
