/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		fontFamily: {
			display: ['inter', 'sans-serif'],
		},
		letterSpacing: {
			tight: '-0.015em',
		},
		extend: {
			colors: {
				dark: '#111',
			},
		},
	},

	plugins: [require('@tailwindcss/typography')],
};
