import Button from "@/components/common/button/components/Button";
import SidebarSubLink from "@/components/sidebar/components/SidebarSubLink";
import { SidebarSubLinksType } from "@/components/sidebar/types/index.types";
import useToggle from "@/hooks/click-handlers/useToggle";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SidebarSubLinks = ({
	name,
	icon,
	links,
	isActive,
	customStyles,
	href,
}: SidebarSubLinksType) => {
	const { currentState, toggle } = useToggle(isActive);
	const { push } = useRouter();

	return (
		<>
			<Button
				onclick={() => {
					href ? push(href) : toggle();
				}}
				customStyles={`sidebar__sub__links ${customStyles}`}
			>
				{links?.length ? (
					<IoIosArrowForward
						className={`${
							currentState ? "rotate-90" : "rotate-0"
						} transition-all`}
					/>
				) : null}
				{icon}
				<span>{name}</span>
			</Button>

			{currentState
				? links?.map(link => <SidebarSubLink key={link.href} {...link} />)
				: null}
		</>
	);
};

export default SidebarSubLinks;
