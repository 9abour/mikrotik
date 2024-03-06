import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

const useHandleSmallScreen = (customToggle: Function) => {
	const smallScreen = useMediaQuery("(max-width: 768px)");

	useEffect(() => {
		if (smallScreen) {
			customToggle(false);
		} else {
			customToggle(true);
		}
	}, [smallScreen]);
};

export default useHandleSmallScreen;
