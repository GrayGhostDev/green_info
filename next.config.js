/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/green_info' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
  // Add asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/green_info' : '',
  // Disable server components
  // experimental: {
  //   appDir: false,
  // },
}

module.exports = nextConfig 