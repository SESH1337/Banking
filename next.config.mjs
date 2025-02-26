// export default {
//   images: {
//     domains: ['via.placeholder.com'],
//   },
// }

// const isProd = process.env.NODE_ENV === 'production'

// export default {
//   output: 'export', // Required for static export (GitHub Pages)
//   basePath: isProd ? '/Banking' : '', // Change '/Banking' to your GitHub repo name
//   assetPrefix: isProd ? '/Banking/' : '',
//   images: {
//     unoptimized: true, // Disable image optimization for static hosting
//   },
//   trailingSlash: true, // Ensures proper routing
// }
module.exports = {
  basePath: '/Banking',
  assetPrefix: '/Banking/',
}
