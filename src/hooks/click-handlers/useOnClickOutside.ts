import { useRef, useEffect } from "react";

export const useOnClickOutside = (
	callback: Function,
	screenSize: boolean = true
) => {
	const ref = useRef<HTMLElement>();

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				ref.current &&
				!ref.current.contains(event.target as Node) &&
				screenSize
			) {
				callback();
			}
		};

		document.addEventListener("click", handleClick, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
		};
	}, [ref, screenSize]);

	return ref;
};
