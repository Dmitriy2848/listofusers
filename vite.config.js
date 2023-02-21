import { defineConfig } from 'vite';
import {join} from 'path';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';


export default defineConfig({
	plugins: [react(), viteSvgr()],
	resolve: {
		alias: {
			ui: join(__dirname, 'src', 'ui'),
			pages: join(__dirname, 'src', 'pages'),
			hooks: join(__dirname, 'src', 'hooks'),
		}
	},
	css: {
		// postcss: join(__dirname, 'postcss.config.json')
	}
});
