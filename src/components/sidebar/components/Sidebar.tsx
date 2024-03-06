"use client";

import Button from "@/components/common/button/components/Button";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import Logo from "@/components/common/logo/Logo";
import SidebarSubLinks from "@/components/sidebar/components/SidebarSubLinks";
import { overviewData } from "@/components/sidebar/data/sidebar.data";
import SidebarContext from "@/context/SidebarContext";
import React, { lazy, useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
const SidebarMob = lazy(
	() => import("@/components/sidebar/components/SidebarMob")
);

const Sidebar = () => {
	const { sidebarOpen, toggle } = useContext(SidebarContext);

	if (!sidebarOpen) {
		return <SidebarMob />;
	}

	return (
		<aside className="relative min-w-[300px] h-screen py-2 bg-primary-dark1 z-50">
			<div className="flex-jb-c">
				<Logo isDesktop={true} />
				<Button
					icon={<IoIosArrowBack size={20} />}
					onclick={toggle}
					customStyles="mr-2 !border-0"
				/>
			</div>
			<HorizontalDivider
				height="min-h-[1px] h-[1px]"
				bgColor="bg-grey-santaGrey/20"
			/>
			<p className="sidebar__sub_title">Overview</p>
			<ul className="px-2">
				{overviewData.map(item => (
					<SidebarSubLinks key={item.name} {...item} />
				))}
			</ul>
			<HorizontalDivider
				height="max-h-[1px] h-[1px]"
				bgColor="bg-grey-santaGrey/20"
			/>
			<p className="sidebar__sub_title">Account</p>
			<Button onclick={() => {}} customStyles="sidebar__sub__links">
				<IoSettingsOutline />
				Settings
			</Button>
			<Button onclick={() => {}} customStyles="sidebar__sub__links">
				<FiLogOut />
				Log out
			</Button>
		</aside>
	);
};

export default Sidebar;
