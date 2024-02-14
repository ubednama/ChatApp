import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy: {        //this is only for development, when deployed we dont need it
      "/api":{
        target:"http://localhost:5000",
      }
    }
  }
})
