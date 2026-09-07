import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/statusplug-reach-out/',
  tanstackStart: {
    server: { entry: "server" },
  },
});
