import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "vite_consumer",
      manifest: true,
      dts: true,
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:3001/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
});
