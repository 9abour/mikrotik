import React from "react";
import { FormPropsType } from "../types/index.types";
import Button from "../../button/components/Button";
import Input from "./Input";

const Form = ({ submitText, inputs, title }: FormPropsType) => {
	return (
		<form className="w-full max-w-[1200px] grid grid-cols-4 mx-auto  gap-2">
			{title ? <h1 className="text-3xl col-span-4">{title}</h1> : null}

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
