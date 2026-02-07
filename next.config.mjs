/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/logistics_sistema',
  assetPrefix: '/logistics_sistema/',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig