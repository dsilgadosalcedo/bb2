/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundImage: {
        'background-image': "url('../assets/background.jpg')",
      },
			colors: {
				'bb2': {
					'100': '#c5d9e9',
					'200': '#7aa6cc',
					'300': '#4381b7',
					'400': '#336188',
					'500': '#223d56',
					'600': '#172939',
				} 
			},
			fontFamily: {
				'spline-normal': ['SplineSans-normal', 'sans-serif'],
				'mono': ['MonoDisplay-normal', 'mono']
			}
		}
	},
	plugins: [],
}
