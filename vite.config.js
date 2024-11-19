import { resolve } from "path";
import { defineConfig } from "vite";

/** @type {import('vite').Plugin} */
function delayMainCssPlugin() {
    let server;
    return {
        name: "delay-main-css",
        enforce: "pre",
        configureServer(_server) {
            server = _server;
        },
        async load(id) {
            if (server && id.includes(resolve(__dirname, "src/main.css"))) {
                await server.waitForRequestsIdle(id);
            }
        },
    };
}

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                register: resolve(__dirname, "register/index.html"),
            },
        },
    },
    plugins: [delayMainCssPlugin()],
});
