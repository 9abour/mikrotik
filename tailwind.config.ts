import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: {
					bg: "#0b0c0e",
					dark1: "#141619",
					dark2: "#202226",
					mediumForestGreen: "#4d853a",
				},
				grey: {
					white: "#f7f8fa",
					monsoon: "#82828D",
					chateau: "#A9A9B1",
					iron: "#D0D4DA",
					ghostWhite: "#F9F8FF",
					santaGrey: "#9ea5b0",
				},
			},
		},
	},
	plugins: [],
};
export default config;
