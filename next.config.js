/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "fakestoreapi.com",
      "naszsklep-api.vercel.app",
      "media.graphassets.com"
    ],
  },
}

module.exports = nextConfig
