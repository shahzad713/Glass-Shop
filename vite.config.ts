import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static-site generation is driven by vite-react-ssg (see index.tsx / routes).
// No secrets are injected into the client bundle here — server-only secrets
// (e.g. RESEND_API_KEY) live in the Vercel serverless function environment.
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // Split vendor chunks for better caching. Function form (not object) so the
    // SSR build — where react/react-dom are external — never tries to resolve
    // them as chunk entries (avoids EXTERNAL_MODULES_CANNOT_BE_INCLUDED).
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('lucide-react')) return 'icons';
          if (
            /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(
              id,
            )
          ) {
            return 'react-vendor';
          }
        },
      },
    },
  },
});
