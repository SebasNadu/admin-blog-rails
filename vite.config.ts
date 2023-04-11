// import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import RubyPlugin from "vite-plugin-ruby";
import StimulusHMR from "vite-plugin-stimulus-hmr";

const reactPlugin = require("@vitejs/plugin-react");

export default defineConfig({
  plugins: [
    // react(),
    RubyPlugin(),
    StimulusHMR(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 300 }),
  ],
  /* resolve: {
    alias: {
      components: resolve(__dirname, 'app/javascript/components'),
      pages: resolve(__dirname, 'app/javascript/pages'),
      layouts: resolve(__dirname, 'app/javascript/layouts'),
      images: resolve(__dirname, 'app/javascript/images'),
      types: resolve(__dirname, 'app/javascript/types'),
    },
  }, */
  /* resolve: {
    alias: {
      "@": resolve(__dirname, "app/javascript"),
    },
  },
  optimizeDeps: {
    include: ["@fortawesome/fontawesome-free"],
  }, */
});
