import TableItem from "@/components/common/table/components/TableItem";
import TableTHeadItem from "@/components/common/table/components/TableTHeadItem";
import React from "react";

const Table = () => {
	return (
		<div className="relative overflow-x-auto shadow-md rounded-lg border-[1.5px] border-grey-santaGrey/20">
			<table className="w-full text-sm text-left rtl:text-right text-grey-santaGrey">
				<thead className="text-xs uppercase bg-primary-dark1 text-grey-iron">
					<tr>
						<TableTHeadItem text="Full Name" />
						<TableTHeadItem text="Username" />
						<TableTHeadItem text="Phone Number" />
						<TableTHeadItem text="Service" />
						<TableTHeadItem text="Action" />
					</tr>
				</thead>
				<tbody>
					<TableItem />
					<TableItem />
					<TableItem />
				</tbody>
			</table>
		</div>
	);
};

export default Table;
