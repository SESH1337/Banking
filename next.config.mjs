// export default {
//   images: {
//     domains: ['via.placeholder.com'],
//   },
// }
const isProd = process.env.NODE_ENV === 'production'

export default {
  basePath: isProd ? '/your-repo-name' : '',
  assetPrefix: isProd ? '/your-repo-name/' : '',
  images: {
    unoptimized: true, // Disable Next.js image optimization for static hosting
  },
}
