import { InputType } from "@/components/common/form/types/index.types";

export const singInFormInputsData: InputType[] = [
	{
		name: "username",
		type: "text",
		placeholder: "Username",
		required: true,
		autoFocus: true,
		customStyles: "col-span-4",
		label: "Enter your username",
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		required: true,
		customStyles: "col-span-4",
		label: "Enter your password",
	},
];

export const singInFormSubmitText: string = "Sign In";

export const singInFormILinksData = [
	{
		text: `Don't have an account? `,
		link: {
			href: "/signup",
			text: "Sign Up",
		},
	},
	{
		text: `Forgot password? `,
		link: {
			href: "/send-reset-password",
			text: "Reset",
		},
	},
];
