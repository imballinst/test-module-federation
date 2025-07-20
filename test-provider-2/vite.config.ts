import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      manifest: true,
      dts: true,
      exposes: {
        ".": "./src/components/ProviderComponent.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
});
