import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#FFFFFF',
        dental: '#F0F7FF',
        blue: '#2563EB',
        blueDark: '#1E40AF',
        blueLight: '#E0F2FE',
        gray900: '#111827',
        gray700: '#374151',
        gray500: '#6B7280',
        gray300: '#D1D5DB',
        gray100: '#F3F4F6'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        xl: '14px'
      }
    },
  },
  plugins: [],
}
export default config
