import useDatePicker from "@/components/common/form/hooks/useDatePicker";
import { CustomDatePickerProps } from "@/components/common/form/types/index.types";
import React from "react";
// import { DatePicker } from "rsuite";

const CustomDatePicker = ({ initialDate }: CustomDatePickerProps) => {
	const { date, changeDate } = useDatePicker(initialDate);

	return <div>{/* <DatePicker value={date} onChange={changeDate} /> */}</div>;
};

export default CustomDatePicker;
