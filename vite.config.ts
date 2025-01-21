import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Fix for Leaflet's icon path resolution
      'leaflet': 'leaflet/dist/leaflet-src.esm.js',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
