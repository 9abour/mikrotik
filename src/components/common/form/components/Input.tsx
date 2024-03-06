"use client";

import React from "react";
import EyeButton from "@/components/common/button/components/EyeButton";
import { InputType } from "@/components/common/form/types/index.types";
import useInput from "@/components/common/form/hooks/useInput";
import useToggle from "@/hooks/click-handlers/useToggle";

const Input = ({
	label,
	name,
	type,
	placeholder,
	customStyles,
	icon,
	autoFocus,
}: InputType) => {
	const { value, onChange } = useInput("");
	const { currentState, toggle } = useToggle(false);

	const inputStyles = `w-full py-2 px-4 rounded-md border-[1.5px] bg-primary-dark1 text-primary-mediumForestGreen border-grey-santaGrey/10 hover:border-primary-mediumForestGreen focus:border-primary-mediumForestGreen outline-none ${
		icon ? "pl-12" : ""
	} ${type == "password" ? "pr-12" : ""} transition-all`;

	return (
		<div className={`relative flex flex-col ${customStyles}`}>
			{label ? <label className="text-grey-santaGrey">{label}</label> : null}
			<input
				type={type == "password" && currentState ? "text" : type}
				value={value}
				onChange={onChange}
				className={inputStyles}
				placeholder={placeholder}
				autoFocus={autoFocus}
				name={name}
			/>

			{type == "password" ? (
				<EyeButton
					isShowPassword={currentState}
					toggle={toggle}
					label={label}
				/>
			) : null}

			<span
				className={`absolute left-4 -translate-y-2/4 text-grey-monsoon ${
					label ? "top-[calc(50%+12px)]" : "top-2/4"
				}`}
			>
				{icon}
			</span>
		</div>
	);
};

export default Input;
