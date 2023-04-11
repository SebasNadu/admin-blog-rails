import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import RubyPlugin from "vite-plugin-ruby";
import StimulusHMR from "vite-plugin-stimulus-hmr";

export default defineConfig({
  plugins: [
    RubyPlugin(),
    StimulusHMR(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 300 }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "app/javascript"),
    },
  },
  optimizeDeps: {
    include: ["@fortawesome/fontawesome-free"],
  },
});
