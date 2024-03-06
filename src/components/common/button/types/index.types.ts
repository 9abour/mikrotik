import { ReactNode } from "react";

export interface TextButtonPropsType {
	text?: string;
	textColor?: string;
	customStyles?: string;
	type?: "button" | "submit" | undefined;
	onclick: Function;
	icon?: ReactNode;
	children?: ReactNode;
}
