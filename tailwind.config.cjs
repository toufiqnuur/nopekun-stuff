const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		colors: {
			gray: colors.coolGray,
			white: colors.white,
			green: colors.green,
			black: colors.black,
			blue: colors.blue
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				xl: '1280px'
			}
		},
		borderWidth: {
			DEFAULT: '1.25px',
			4: '4px'
		},
		ringWidth: {
			DEFAULT: '.75px',
			1: '1.25px',
			2: '1.5px'
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	}
};
