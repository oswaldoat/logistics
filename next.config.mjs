/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/logistics',
  assetPrefix: '/logistics',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig