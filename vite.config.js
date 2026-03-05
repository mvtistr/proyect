import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      '@cart': fileURLToPath(new URL('./Frontend/Cart', import.meta.url)),
      '@gallery': fileURLToPath(new URL('./Frontend/Gallery', import.meta.url)),
      '@home': fileURLToPath(new URL('./Frontend/Home', import.meta.url)),
      '@login': fileURLToPath(new URL('./Frontend/Login', import.meta.url)),
      '@register': fileURLToPath(new URL('./Frontend/Register', import.meta.url)),
      '@users': fileURLToPath(new URL('./Frontend/Users', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@context': fileURLToPath(new URL('./src/context', import.meta.url))
    },
  },
})