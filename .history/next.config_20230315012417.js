/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com/a/AGNmyxaF-bILzfntve7LnZkcBYA6WhXCooMsiAyf5OnQAA=s96-c", "lh3.googleusercontent.com" ],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}


module.exports = nextConfig
