/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}