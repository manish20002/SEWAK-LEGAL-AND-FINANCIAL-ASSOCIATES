import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
        work: fileURLToPath(new URL('./work.html', import.meta.url)),
        contact: fileURLToPath(new URL('./contact.html', import.meta.url)),
        gst: fileURLToPath(new URL('./gst-advisory.html', import.meta.url)),
        msme: fileURLToPath(new URL('./msme-commercial-litigation.html', import.meta.url)),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
