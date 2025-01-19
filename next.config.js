/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/green_info' : '',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig 