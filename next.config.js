/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // 末尾の/をつける
  experimental: {
    appDir: true,
    enableUndici: true,
  }
}

module.exports = nextConfig
