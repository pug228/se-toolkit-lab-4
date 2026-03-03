import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/items': 'http://127.0.0.1:42000',
      '/interactions': 'http://127.0.0.1:42000',
      '/learners': 'http://127.0.0.1:42000',
    },
  },
})
