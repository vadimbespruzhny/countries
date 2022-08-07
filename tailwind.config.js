/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/index.html", 
		"./src/components/**/*.{vue,html,js}",
		"./src/pages/**/*.{vue,html,js}", 
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
