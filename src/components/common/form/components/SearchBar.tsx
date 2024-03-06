"use client";

import React from "react";
import Input from "@/components/common/form/components/Input";
import { SearchBarProps } from "@/components/common/form/types/index.types";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ placeholder }: SearchBarProps) => {
	return (
		<form className="relative">
			<Input
				name="search"
				type="text"
				placeholder={placeholder}
				customStyles="[&>input]:pr-12 [&>input]:rounded-full"
			/>
			<button
				type="submit"
				className="absolute h-full right-2 top-0 -translate-x-2/4"
			>
				<CiSearch />
			</button>
		</form>
	);
};

export default SearchBar;
