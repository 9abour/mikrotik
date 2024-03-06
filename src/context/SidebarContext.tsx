"use client";

import useHandleSmallScreen from "@/components/sidebar/hooks/useHandleSmallScreen";
import useToggle from "@/hooks/click-handlers/useToggle";
import { IChildren } from "@/types/index.types";
import { createContext } from "react";

const initialState = {
	sidebarOpen: false,
	toggle: () => {},
	customToggle: (e: boolean) => {},
};

const SidebarContext = createContext(initialState);

const SidebarProvider = ({ children }: IChildren) => {
	const { currentState, toggle, customToggle } = useToggle(false);
	useHandleSmallScreen(customToggle);

	return (
		<SidebarContext.Provider
			value={{
				sidebarOpen: currentState,
				toggle,
				customToggle,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
};

export default SidebarContext;
export { SidebarProvider };
