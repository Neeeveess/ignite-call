/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: [
    'page.tsx', 'api.ts', 'apt.tsx'
  ],
}

module.exports = nextConfig
