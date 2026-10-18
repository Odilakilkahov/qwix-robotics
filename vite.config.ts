import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: https://odilakilkahov.github.io/qwix-robotics/
export default defineConfig({
  base: '/qwix-robotics/',
  plugins: [react(), tailwindcss()],
})
