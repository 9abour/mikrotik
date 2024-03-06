import React from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const EyeButton = ({
	isShowPassword,
	toggle,
}: {
	isShowPassword: boolean;
	toggle: () => void;
}) => {
	return (
		<button
			type="button"
			onClick={toggle}
			className="absolute right-4 top-[calc(50%+12px)] -translate-y-2/4 text-grey-monsoon hover:text-primary-mediumForestGreen transition-all"
		>
			{isShowPassword ? <GoEye /> : <GoEyeClosed />}
		</button>
	);
};

export default EyeButton;
