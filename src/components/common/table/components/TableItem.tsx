import Link from "next/link";
import React from "react";

const TableItem = () => {
	return (
		<tr className="odd:bg-primary-dark2 even:bg-primary-dark1 border-b [&:last-child]:border-0 [&:not(:last-child)]:border-grey-santaGrey/20">
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				Mohamed AbdSabour
			</th>
			<td className="px-6 py-4">9abour</td>
			<td className="px-6 py-4">n/a</td>
			<td className="px-6 py-4">All</td>
			<td className="px-6 py-4">
				<Link
					href={`/user/update/userId`}
					className="font-medium text-primary-mediumForestGreen hover:underline"
				>
					Edit
				</Link>
			</td>
		</tr>
	);
};

export default TableItem;
