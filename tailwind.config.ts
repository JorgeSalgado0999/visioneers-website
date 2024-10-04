import type {Config} from "tailwindcss";

import flowbite from "flowbite-react/tailwind";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		flowbite.content(),
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				customPurple: {
					light1: "var(--custom-purple-light1)", // Más claro
					light2: "var(--custom-purple-light2)", // Muy claro
					DEFAULT: "var(--custom-purple)", // Color base
					dark1: "var(--custom-purple-dark1)", // Más oscuro
					dark2: "var(--custom-purple-dark2)", // Muy oscuro
				},
				customOrange: {
					light1: "var(--custom-orange-light1)", // Más claro
					light2: "var(--custom-orange-light2)", // Muy claro
					DEFAULT: "var(--custom-orange)", // Color base
					dark1: "var(--custom-orange-dark1)", // Más oscuro
					dark2: "var(--custom-orange-dark2)", // Muy oscuro
				},
				customBlue: {
					light1: "var(--custom-blue-light1)", // Más claro
					light2: "var(--custom-blue-light2)", // Muy claro
					DEFAULT: "var(--custom-blue)", // Color base
					dark1: "var(--custom-blue-dark1)", // Más oscuro
					dark2: "var(--custom-blue-dark2)", // Muy oscuro
				},
				customPink: {
					light1: "var(--custom-pink-light1)", // Más claro
					light2: "var(--custom-pink-light2)", // Muy claro
					DEFAULT: "var(--custom-pink)", // Color base
					dark1: "var(--custom-pink-dark1)", // Más oscuro
					dark2: "var(--custom-pink-dark2)", // Muy oscuro
				},
				customYellow: {
					light1: "var(--custom-yellow-light1)", // Más claro
					light2: "var(--custom-yellow-light2)", // Muy claro
					DEFAULT: "var(--custom-yellow)", // Color base
					dark1: "var(--custom-yellow-dark1)", // Más oscuro
					dark2: "var(--custom-yellow-dark2)", // Muy oscuro
				},
				customGreen: {
					light1: "var(--custom-green-light1)", // Más claro
					light2: "var(--custom-green-light2)", // Muy claro
					DEFAULT: "var(--custom-green)", // Color base
					dark1: "var(--custom-green-dark1)", // Más oscuro
					dark2: "var(--custom-green-dark2)", // Muy oscuro
				},
				customGray: {
					light1: "var(--custom-gray-light1)", // Más claro
					light2: "var(--custom-gray-light2)", // Muy claro
					DEFAULT: "var(--custom-gray)", // Color base
					dark1: "var(--custom-gray-dark1)", // Más oscuro
					dark2: "var(--custom-gray-dark2)", // Muy oscuro
				},
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
	plugins: [flowbite.plugin()],
};
export default config;
