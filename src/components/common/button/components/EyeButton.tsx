import React from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const EyeButton = ({
	isShowPassword,
	toggle,
	label,
}: {
	isShowPassword: boolean;
	toggle: () => void;
	label?: string;
}) => {
	return (
		<button
			type="button"
			onClick={toggle}
			className={`absolute right-4 -translate-y-2/4 text-grey-monsoon hover:text-primary-mediumForestGreen transition-all ${
				label ? "top-[calc(50%+12px)]" : "top-2/4"
			}`}
		>
			{isShowPassword ? <GoEye /> : <GoEyeClosed />}
		</button>
	);
};

export default EyeButton;
