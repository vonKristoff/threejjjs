/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,css,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Nunito Sans'],
				secondary: ['Inter']
			}
		}
	},
	plugins: []
};
