"use client";

import Form from "@/components/common/form/components/Form";
import Table from "@/components/common/table/components/Table";
import { createServiceInputs } from "@/components/service/data/index.data";
import React from "react";

const CreateService = () => {
	return (
		<div className="w-full max-w-[1200px] mx-auto px-6 my-12 flex flex-col gap-8">
			<Form
				inputs={createServiceInputs}
				submitText="Create"
				submitFunc={() => {}}
				title="Create Service"
			/>

			<div>
				<h1 className="text-3xl col-span-4 mb-2">Service List</h1>
				<Table />
			</div>
		</div>
	);
};

export default CreateService;
