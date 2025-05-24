import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdown } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdown({ mode: 'raw' }) // Import markdown as raw text
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // listen on all addresses (0.0.0.0)
  },
});
