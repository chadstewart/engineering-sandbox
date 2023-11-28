import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
      outDir: 'build',
      assetsDir: 'assets',
      emptyOutDir: true
  },
  server:{
    host: true,
    strictPort: true,
    port: 4001
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
