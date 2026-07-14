import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		// Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
		// tanstackRouter({
		//   target: 'react',
		//   autoCodeSplitting: true,
		// }),
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
