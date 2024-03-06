import React from "react";
import { FormPropsType } from "../types/index.types";
import Button from "../../button/components/Button";
import Input from "./Input";

const Form = ({ submitText, inputs }: FormPropsType) => {
	return (
		<form className="w-full max-w-[600px] grid grid-cols-4 px-4 gap-2">
			{inputs.map(input => (
				<Input
					key={input.name}
					type={input.type}
					placeholder={input.placeholder}
					name={input.name}
					autoFocus={input.autoFocus}
					customStyles={input.customStyles}
					icon={input.icon}
					label={input.label}
				/>
			))}

			<Button
				type="submit"
				text={submitText}
				customStyles="col-span-4 my-2 font-medium text-xl text-white bg-primary-mediumForestGreen hover:bg-opacity-90 transition-all"
				onclick={() => {}}
			/>
		</form>
	);
};

export default Form;
