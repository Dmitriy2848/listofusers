import { defineConfig } from 'vite';
import { join } from 'path';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), viteSvgr()],
	resolve: {
		alias: {
			src: join(__dirname, 'src')
		}
	}
});
