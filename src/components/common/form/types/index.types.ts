import { FormEvent } from "react";
import { ReactNode } from "react";

export type InputType = {
	label?: string;
	name: string;
	type: string;
	placeholder: string;
	customStyles?: string;
	icon?: ReactNode;
	required?: boolean;
	autoFocus?: boolean;
};

export type FormPropsType = {
	inputs: InputType[];
	submitText: string;
	submitFunc: (e: FormEvent) => void;
	onFormValueChange?: ({ value, key }: Record<string, string>) => void;
};

export type TextAreaType = {
	label?: string;
	placeholder: string;
	errorValidation?: string;
	customStyles?: string;
};

export type SearchBarProps = {
	placeholder: string;
};

export type CustomDatePickerProps = {
	initialDate: Date;
};
export type CustomColorPickerProps = {
	initialColor: string;
};
