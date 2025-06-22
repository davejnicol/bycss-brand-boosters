import { resolve } from "path";
import { defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
    root: resolve(__dirname, "src/"),
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          home: resolve(__dirname, "src/index.html"),
          about: resolve(__dirname, "src/about-us/index.html"),
          features: resolve(__dirname, "src/features/index.html"),
          pricing: resolve(__dirname, "src/pricing/index.html"),
          contact: resolve(__dirname, "src/contact-us/index.html"),
          careers: resolve(__dirname, "src/careers/index.html"),
          join: resolve(__dirname, "src/join-now/index.html"),
          styleGuide: resolve(__dirname, "src/style-guide/index.html"),
        },
      },
    },
    plugins: [
        postcssPresetEnv(),
    ]
})