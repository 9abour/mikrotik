"use client";

import Form from "@/components/common/form/components/Form";
import { singInFormInputsData } from "@/components/form/signInData";
import React from "react";

const SignIn = () => {
	return (
		<div className="w-screen h-screen grid place-items-center">
			<Form
				inputs={singInFormInputsData}
				submitText="Sign In"
				submitFunc={() => {}}
			/>
		</div>
	);
};

export default SignIn;
