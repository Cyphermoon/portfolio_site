/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com", "cdn.sanity.io", "picsum.photos"]
  }
}

module.exports = nextConfig
