import { defineConfig } from "tsup";

export default defineConfig({
    // The file we created above that will be the entrypoint to the library.
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    external: ["react", "react-dom",],
    minify: true,
    // Enable TypeScript type definitions to be generated in the output.
    // This provides type-definitions to consumers.
    dts: true,
    // Clean the `dist` directory before building.
    // This is useful to ensure the output is only the latest.
    clean: true,
    // Sourcemaps for easier debugging.
    sourcemap: true,
    skipNodeModulesBundle: true,
    esbuildOptions(options) {
        options.banner = {
            js: '"use client";',
        };
    },
});