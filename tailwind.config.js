const { Config } = require('tailwindcss');

const config = {
	mode: 'jit',
	content: ["./pages/**/*.html", "./pages/**/*.js"],
	theme: {
	  extend: {},
	},
	plugins: [],
};

module.exports = config;