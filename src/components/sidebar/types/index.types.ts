import { ReactNode } from "react";

type SidebarSubLinkItemType = {
	name: string;
	href: string;
};

type SidebarSubLinksType = {
	name: string;
	icon: ReactNode;
	isActive: boolean;
	links?: SidebarSubLinkItemType[];
	customStyles?: string;
};

export type { SidebarSubLinkItemType, SidebarSubLinksType };
