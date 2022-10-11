/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xs: '500px',
			sm: '680px',
			md: '768px',
			lg: '1024px',
			xl: '1200px',
		},
		extend: {
			colors: {
				mainCol: '#00ADED',
			},
		},
	},
	plugins: [],
};
