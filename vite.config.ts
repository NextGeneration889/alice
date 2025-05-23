import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' 

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
    port: 5173,
  },
  css: {
    postcss: './postcss.config.js',
  },
})
