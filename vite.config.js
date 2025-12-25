import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [react()],
    // Required for GitHub Pages
    base: '/heisenberg/',
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
    },
});
