import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  // Determine base path based on environment
  // - Development (npm run dev): use '/'
  // - Production (npm run build): use '/heisenberg/' for GitHub Pages
  const base = command === 'build' && mode === 'production' 
    ? '/heisenberg/' 
    : '/';

  return {
    plugins: [react()],

    // Dynamic base path
    base,

    // Shadcn path resolution
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    // Build optimizations to prevent timeout
    build: {
      outDir: 'dist',
      sourcemap: false,

      // Faster & safer build
      minify: 'esbuild',

      // Disable heavy code splitting (fixes hang / timeout)
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },

      // Avoid warning spam & large chunk stalls
      chunkSizeWarningLimit: 1500,
    },

    // Dev server
    server: {
      port: 3000,
      open: true,
    },

    // Preview (useful for GH Pages testing)
    preview: {
      port: 4173,
      // Also use /heisenberg/ for preview to simulate GitHub Pages
      base: '/heisenberg/',
    },
  };
});
