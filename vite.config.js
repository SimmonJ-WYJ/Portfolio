import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5174,
    host: true,
  },
})
