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
}
module.exports = nextConfig
