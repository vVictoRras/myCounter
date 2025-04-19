import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/myCounter/', // 👈 твой репозиторий на GitHub
  plugins: [react()],
})