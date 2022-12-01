/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'media-exp1.licdn.com', 'platform-lookaside.fbsbx.com']
  },
  swcMinify: true,
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
