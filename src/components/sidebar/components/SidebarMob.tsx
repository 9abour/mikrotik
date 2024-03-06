"use client";

import Button from "@/components/common/button/components/Button";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import Logo from "@/components/common/logo/Logo";
import SidebarSubLinks from "@/components/sidebar/components/SidebarSubLinks";
import { overviewData } from "@/components/sidebar/data/sidebar.data";
import SidebarContext from "@/context/SidebarContext";
import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const SidebarMob = () => {
	const { sidebarOpen, toggle } = useContext(SidebarContext);

	return (
		<aside className="relative min-w-[80px] h-screen py-2 bg-primary-dark1 z-10">
			<div className={`${sidebarOpen ? "flex-jb-c" : "flex-jc-c"}`}>
				<Logo isDesktop={sidebarOpen} />
				{sidebarOpen ? (
					<Button
						icon={<IoIosArrowBack size={20} />}
						onclick={toggle}
						customStyles="mr-2 !border-0"
					/>
				) : null}
			</div>
			<HorizontalDivider
				height="min-h-[1px] h-[1px]"
				bgColor="bg-grey-santaGrey/20"
			/>
			<ul className="px-2" onClick={toggle}>
				{overviewData.map(item => (
					<SidebarSubLinks
						key={item.name}
						name={item.name}
						icon={item.icon}
						isActive={item.isActive}
						customStyles="sidebar__mob__sub__links"
					/>
				))}
			</ul>
			<HorizontalDivider
				height="max-h-[1px] h-[1px]"
				bgColor="bg-grey-santaGrey/20"
			/>
			<Button
				onclick={() => {}}
				customStyles="sidebar__sub__links sidebar__mob__sub__links"
			>
				<IoSettingsOutline />
			</Button>
			<Button
				onclick={() => {}}
				customStyles="sidebar__sub__links sidebar__mob__sub__links"
			>
				<FiLogOut />
			</Button>

			<Button
				onclick={toggle}
				customStyles="absolute bottom-4 left-2/4 -translate-x-2/4 !border-0"
			>
				<IoIosArrowForward size={20} className="" />
			</Button>
		</aside>
	);
};

export default SidebarMob;
