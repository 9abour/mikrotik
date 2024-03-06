"use client";

import React from "react";
import { TextAreaType } from "@/components/common/form/types/index.types";
import useInput from "@/components/common/form/hooks/useInput";

const Textarea = ({
	label,
	placeholder,
	customStyles,
	errorValidation,
}: TextAreaType) => {
	const { value, onChange } = useInput("");

	return (
		<div>
			{label ? <label>{label}</label> : null}

			<textarea
				value={value}
				onChange={onChange}
				className={`w-full py-2 px-4 rounded-md border-[1.5px] border-iron hover:border-primary-mediumForestGreen focus:border-primary-mediumForestGreen outline-none transition-all ${customStyles}`}
				placeholder={placeholder}
			/>

			{errorValidation ? (
				<p className="text-red-600">{errorValidation}</p>
			) : null}
		</div>
	);
};

export default Textarea;
