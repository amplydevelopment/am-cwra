import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wfReload from '@xatom/wf-app-hot-reload';

export default defineConfig({
	server: {
		port: 1337,
		watch: {
			usePolling: true,
		},
	},
	plugins: [react(), wfReload()],
	base: './',
});
