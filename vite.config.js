import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // puerto fijo para no chocar con el proyecto del gym
  server: { port: 5180, strictPort: true },
  preview: { port: 4180, strictPort: true },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      // se actualiza solo cuando subes una version nueva
      registerType: 'autoUpdate',
      // archivos extra que tambien se guardan para offline
      includeAssets: ['favicon.ico', 'icon.svg', 'apple-touch-icon-180x180.png'],
      manifest: {
        name: 'Lista de Nombres',
        short_name: 'Nombres',
        description: 'Lista de nombres hecha con React y Redux',
        lang: 'es',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#7468ff',
        icons: [
          { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
    }),
  ],
})
