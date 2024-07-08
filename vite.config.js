import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

//import polyfills vite pour bcryptjs
import {nodePolyfills} from 'vite-plugin-node-polyfills'

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/App.jsx"],
            refresh: true,
        }),
        react(),
        {
            name: "react-replace-process",
            transform(code, id) {
                if (id.includes("@vis.gl/react-google-maps")) {
                    return code.replace(
                        /process\.env\.(.+?)/g,
                        (match, key) => {
                            const env = loadEnv(mode, process.cwd(), "");
                            return `import.meta.env.${key}`;
                        }
                    );
                }
                return code;
            },
        },
        nodePolyfills(),
    ],
});
