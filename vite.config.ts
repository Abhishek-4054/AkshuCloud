import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  const plugins = [react(), runtimeErrorOverlay()];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets")
      }
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      rollupOptions: {
        external: [
          "clsx",
          "tailwind-merge",
          "class-variance-authority",
          "@radix-ui/react-toast",
          "@radix-ui/react-tooltip",
          "@radix-ui/react-label",
          "react-icons/fa",
          "react-icons/md"
        ]
      }
    },
    optimizeDeps: {
      include: [
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
        "@radix-ui/react-toast",
        "@radix-ui/react-tooltip",
        "@radix-ui/react-label",
        "react-icons/fa",
        "react-icons/md"
      ]
    },
    server: {
      fs: { strict: true, deny: ["**/.*"] }
    }
  };
});
