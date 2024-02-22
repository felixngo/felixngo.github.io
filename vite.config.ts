import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/felixngo.github.io/",
  server: {
    open: false,
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 80,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
})
