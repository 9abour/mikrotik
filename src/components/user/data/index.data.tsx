import { InputType } from "@/components/common/form/types/index.types";

const createUserInputs: InputType[] = [
	{
		name: "username",
		type: "text",
		placeholder: "Username*",
		required: true,
		customStyles: "col-span-4 sm:col-span-4",
	},
	{
		name: "fullName",
		type: "text",
		autoFocus: true,
		placeholder: "Full Name",
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "phoneNumber",
		type: "number",
		placeholder: "Phone Number",
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password*",
		required: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "confirmPassword",
		type: "password",
		placeholder: "Confirm Password*",
		required: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "devicesLimit",
		type: "number",
		placeholder: "Devices Limit*",
		required: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "service",
		type: "text",
		placeholder: "Service*",
		required: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
];

export { createUserInputs };
