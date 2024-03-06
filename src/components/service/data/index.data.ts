import { InputType } from "@/components/common/form/types/index.types";

const createServiceInputs: InputType[] = [
	{
		name: "serviceName",
		type: "text",
		placeholder: "Service Name*",
		required: true,
		autoFocus: true,
		customStyles: "col-span-4 sm:col-span-3",
	},
	{
		name: "servicePrice",
		type: "number",
		placeholder: "Service Price*",
		required: true,
		customStyles: "col-span-4 sm:col-span-1",
	},
	{
		name: "totalTrafficUnit",
		type: "text",
		placeholder: "Total Traffic Unit*",
		required: true,
		customStyles: "col-span-4 sm:col-span-4",
	},
	{
		name: "nextDisabledServices",
		type: "text",
		placeholder: "Next Disabled Services*",
		required: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "expirationDateUnit",
		type: "text",
		placeholder: "Expiration Date Unit*",
		required: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "uploadLimit",
		type: "text",
		placeholder: "Up Limit*",
		required: true,
		customStyles: "col-span-4 sm:col-span-1",
	},
	{
		name: "downloadLimit",
		type: "text",
		placeholder: "Dow Limit*",
		required: true,
		customStyles: "col-span-4 sm:col-span-1",
	},
	{
		name: "poolNameIp",
		type: "text",
		placeholder: "Pool Name Ip*",
		required: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
];

export { createServiceInputs };
