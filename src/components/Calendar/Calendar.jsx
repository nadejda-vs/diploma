import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
export const CalendarDay = () => {
	const [selectedDay, setSelectedDay] = useState(null);

	const formatInputValue = () => {
		if (!selectedDay) return '';
		return `Day: ${selectedDay.day}`;
	};
	return (
		<DatePicker
			value={selectedDay}
			onChange={setSelectedDay}
			inputPlaceholder="Выберите дату" // placeholder
			formatInputText={formatInputValue} // format value
			inputClassName="my-custom-input" // custom class
			shouldHighlightWeekends
		/>
	);
};
