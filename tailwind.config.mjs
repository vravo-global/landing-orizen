/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'open-sans': ['OpenS', 'sans-serif'],
			},
			colors: {
				'primary': '#144E4F',
				'secondary': '#46807C',
				'secondary-1': '#4C20CF',
			},
		},
	},
	plugins: [],
}
