import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ነዚ ወስኽ

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ነዚ ወስኽ
  ],
  base: './',
})