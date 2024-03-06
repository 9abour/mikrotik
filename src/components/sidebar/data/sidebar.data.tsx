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
		links: [{ name: "Add User", href: "/add-user" }],
		isActive: false,
	},
	{
		name: "Nas",
		icon: <FaNetworkWired />,
		links: [{ name: "Add Nas", href: "/add-nas" }],
		isActive: false,
	},
	{
		name: "Service",
		icon: <MdElectricalServices />,
		links: [{ name: "Add Service", href: "/add-service" }],
		isActive: false,
	},
];
