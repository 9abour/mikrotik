import { RxDashboard } from "react-icons/rx";
import { SidebarSubLinksType } from "@/components/sidebar/types/index.types";
import { FaNetworkWired, FaRegUser } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";

export const overviewData: SidebarSubLinksType[] = [
	{
		name: "Dashboard",
		icon: <RxDashboard />,
		isActive: false,
		href: "/",
	},
	{
		name: "User",
		icon: <FaRegUser />,
		links: [
			{ name: "Users", href: "/user" },
			{ name: "Add User", href: "/user/create" },
		],
		isActive: false,
	},
	{
		name: "Nas",
		icon: <FaNetworkWired />,
		links: [
			{ name: "Nas", href: "/nas" },
			{ name: "Add Nas", href: "/nas/create" },
		],
		isActive: false,
	},
	{
		name: "Service",
		icon: <MdElectricalServices />,
		links: [
			{ name: "Services", href: "/service" },
			{ name: "Add Service", href: "/service/create" },
		],
		isActive: false,
	},
];
