import { BreadcrumbLinkType } from "@/components/common/breadcrumb/types/index.types";
import { usePathname } from "next/navigation";

const useGetActiveBreadcrumb = (breadcrumbs: BreadcrumbLinkType[]) => {
	const currentPath = usePathname();
	const splitPath = currentPath.split("/");
	const activeBreadcrumb = splitPath[splitPath.length - 1];

	const activeBreadcrumbLink = breadcrumbs.find(
		link => link.href == `/${activeBreadcrumb}`
	);

	return activeBreadcrumbLink;
};

export default useGetActiveBreadcrumb;
