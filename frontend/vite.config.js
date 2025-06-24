import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // A porta 3002, como está no seu terminal
    port: 3002, 
  },
});