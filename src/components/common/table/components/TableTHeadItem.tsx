import React from "react";

const TableTHeadItem = ({ text }: { text: string }) => {
	return (
		<th scope="col" className="px-6 py-3">
			{text}
		</th>
	);
};

export default TableTHeadItem;
