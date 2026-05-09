import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto permite que el servidor se escuche en la red local
    port: 5173, // Opcional: puedes fijar el puerto que prefieras
  }
})
