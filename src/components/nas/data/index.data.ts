import { InputType } from "@/components/common/form/types/index.types";

const createNasInputs: InputType[] = [
	{
		name: "nasName",
		type: "text",
		placeholder: "Nas Name*",
		required: true,
		autoFocus: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "ipAddress",
		type: "text",
		placeholder: "Ip Address*",
		required: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "secret",
		type: "text",
		placeholder: "Secret*",
		required: true,
		customStyles: "col-span-4 sm:col-span-4",
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password*",
		required: true,
		customStyles: "col-span-4 sm:col-span-4",
	},
];

export { createNasInputs };
