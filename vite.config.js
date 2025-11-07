import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Export config
export default defineConfig({
  plugins: [react()],

  // ✅ Fix base path for Vercel and GitHub Pages
  base: './',

  // ✅ Optional but helps when deploying on Linux (Vercel build env)
  optimizeDeps: {
    force: true
  },

  // ✅ Ensure correct file system handling
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore "use client" rollup warnings from React 18+
        if (warning.message.includes('use client')) return;
        warn(warning);
      },
    },
  },
})
