import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',          // ← important for project sites
  // if user site (username.github.io) → base: '/'
  // if project site → base: '/repo-name/'
})