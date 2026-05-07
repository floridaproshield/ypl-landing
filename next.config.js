/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yplservices.com',
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
}
module.exports = nextConfig
