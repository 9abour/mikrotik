import { usePathname } from "next/navigation";

const formatLink = (link: string) => {
	if (link == "") {
		return {
			href: "/",
			name: "Home",
		};
	}

	return {
		href: "/" + link,
		name: link.split("-").join(" "),
	};
};

const useGetBreadcrumbs = () => {
	const currentPath = usePathname();
	const home = currentPath.split("/")[0];

	const links =
		currentPath == "/"
			? Array(formatLink(home))
			: currentPath.split("/").map(formatLink);

	return {
		links,
	};
};

export default useGetBreadcrumbs;
