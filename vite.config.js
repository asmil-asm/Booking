import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { lossy: true, quality: 75 },
    }),
  ],
  build: {
    rolldownOptions: {         
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
              priority: 30,
            },
            {
              name: 'query',
              test: /[\\/]node_modules[\\/]@tanstack[\\/]/,
              priority: 25,
            },
            {
              name: 'motion',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              priority: 20,
            },
            {
              name: 'clerk',
              test: /[\\/]node_modules[\\/]@clerk[\\/]/,
              priority: 20,
            },
            {
              name: 'swiper',
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              priority: 20,
            },
            {
              name: 'icons',
              test: /[\\/]node_modules[\\/]react-icons[\\/]/,
              priority: 15,
            },
            {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 5,
              maxSize: 500000,   
            },
          ],
        },
      },
    },
  },
})