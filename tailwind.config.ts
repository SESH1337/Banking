import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d0c22',
        bgSoft: '#2d2b42',
        text: 'white',
        textSoft: '#e5e5e5',
        btn: '#3673fd',
      },
      maxWidth: {
        container: '1536px',
        '2xl': '1366px',

        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '475px',
      },
      padding: {
        'container-lg': '50px',
        'container-sm': '20px',
      },
      blob: "path('M50 0 C80 20, 100 50, 80 80 C60 110, 30 110, 10 80 C-10 50, 20 20, 50 0')",
      clipPath: {
        'custom-polygon':
          'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
      },
    },
  },
  plugins: [],
}
export default config
