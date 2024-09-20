import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				//add gotham
				gotham: ["Gotham", "sans-serif"],
				sans: ["Monserrat", "sans-serif"],
			},
			spacing: (() => {
				const spacing: {[key: number]: string} = {};
				for (let i = 100; i <= 170; i++) {
					spacing[i] = `${i - 100}rem`;
				}
				return spacing;
			})(),
			screens: {
				sm: "30em", //
				md: "48em", //
				lg: "64em", //
				xl: "85em", // this will be max screen size
			},
		},
	},
	plugins: [],
};
export default config;
