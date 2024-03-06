"use client";

import Form from "@/components/common/form/components/Form";
import Table from "@/components/common/table/components/Table";
import { createUserInputs } from "@/components/user/data/index.data";
import React from "react";

const CreateUser = () => {
	return (
		<div className="w-full max-w-[1200px] mx-auto px-6 my-12 flex flex-col gap-8">
			<Form
				inputs={createUserInputs}
				submitText="Create"
				submitFunc={() => {}}
				title="Create User"
			/>

			<div>
				<h1 className="text-3xl col-span-4 mb-2">User List</h1>
				<Table />
			</div>
		</div>
	);
};

export default CreateUser;
