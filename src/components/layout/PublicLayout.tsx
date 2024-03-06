"use client";

import Sidebar from "@/components/sidebar/components/Sidebar";
import SidebarContext from "@/context/SidebarContext";
import { IChildren } from "@/types/index.types";
import React, { useContext } from "react";

const PublicLayout = ({ children }: IChildren) => {
	const { sidebarOpen } = useContext(SidebarContext);

	return (
		<div className="flex">
			<Sidebar />
			<main
				className={`absolute w-[calc(100%-80px)] right-0 transition-all ${
					sidebarOpen ? "sm:w-[calc(100%-300px)]" : "sm:w-[calc(100%-80px)]"
				}`}
			>
				{children}
			</main>
		</div>
	);
};

export default PublicLayout;
