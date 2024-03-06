import Link from "next/link";
import React from "react";
import { SiNintendonetwork } from "react-icons/si";

const Logo = ({ isDesktop }: { isDesktop?: boolean }) => {
	return (
		<Link href="/">
			<div className="px-4 flex-js-c gap-2">
				<span className="p-2 border-[1.5px] border-primary-mediumForestGreen rounded-lg">
					<SiNintendonetwork className="text-primary-mediumForestGreen" />
				</span>
				{isDesktop ? (
					<span className="text-lg text-grey-iron font-medium">MikroTik</span>
				) : null}
			</div>
		</Link>
	);
};

export default Logo;
