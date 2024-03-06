import React from "react";
import { TextButtonPropsType } from "../types/index.types";

const Button = ({
	text,
	customStyles,
	onclick,
	icon,
	type,
	children,
}: TextButtonPropsType) => {
	return (
		<button
			type={type}
			className={`bg-primary-dark1 border-[1.5px] border-grey-santaGrey/20 text-grey-santaGrey p-2 rounded-md transition-all hover:opacity-80 ${
				customStyles ? customStyles : ""
			}`}
			onClick={() => onclick()}
		>
			{text}
			{icon}
			{children}
		</button>
	);
};

export default Button;
