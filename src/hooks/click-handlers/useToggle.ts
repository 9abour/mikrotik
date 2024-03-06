import { useState } from "react";

const useToggle = (defaultValue: boolean = false) => {
	const [currentState, setValue] = useState(defaultValue);

	const toggle = () => {
		setValue(prev => !prev);
	};

	const customToggle = (e: boolean) => {
		setValue(e);
	};

	return {
		currentState,
		toggle,
		customToggle,
	};
};

export default useToggle;
