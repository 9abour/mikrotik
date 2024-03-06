import { FaRegUser } from "react-icons/fa";
import { InputType } from "@/components/common/form/types/index.types";
import { RiLockPasswordLine } from "react-icons/ri";

export const singInFormInputsData: InputType[] = [
	{
		name: "username",
		type: "text",
		placeholder: "Username",
		required: true,
		autoFocus: true,
		customStyles: "col-span-4",
		label: "Enter your username",
		icon: <FaRegUser size={20} />,
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		required: true,
		customStyles: "col-span-4",
		label: "Enter your password",
		icon: <RiLockPasswordLine size={20} />,
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
