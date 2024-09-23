import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0',
    port:3000,
    proxy: {        //this is only for development, when deployed we dont need it
      "/api":{
        // target:"http://localhost:5000",
        target: "https://chat-app-uwfk.onrender.com",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
