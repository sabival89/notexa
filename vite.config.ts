import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [
					'babel-plugin-macros',
					'babel-plugin-styled-components',
					'@babel/plugin-proposal-class-properties',
				],
			},
		}),
		tailwindcss(),
	],
})
