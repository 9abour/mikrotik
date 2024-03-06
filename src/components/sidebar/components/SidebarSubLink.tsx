import { SidebarSubLinkItemType } from "@/components/sidebar/types/index.types";
import Link from "next/link";
import React from "react";

const SidebarSubLink = ({ name, href }: SidebarSubLinkItemType) => {
	return (
		<Link
			href={href}
			className="w-full block py-1 ml-14 font-normal text-grey-monsoon hover:text-grey-iron transition-all"
		>
			{name}
		</Link>
	);
};

export default SidebarSubLink;
