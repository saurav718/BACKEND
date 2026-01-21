import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // serverconfigration for proxying API requests to backend server 
  server:{
    proxy:{
      '/api': 'http://localhost:5000'
    }
  },
  plugins: [react(),

  ],
})
