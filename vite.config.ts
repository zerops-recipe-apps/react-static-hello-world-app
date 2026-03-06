import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Inject build timestamp at compile time — readable via __BUILD_TIME__ in source
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
})
