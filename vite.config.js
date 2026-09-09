import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Magnolia_Landing/', // <-- Точное название твоего репозитория на GitHub
})