import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
	formatDate,
	parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/it';

import 'moment/locale/it';
export const CalendarDay = () => {
	return (
		<div>
			<p>Выберите дату:</p>

			<DayPickerInput
				formatDate={formatDate}
				parseDate={parseDate}
				placeholder={`${formatDate(new Date())}`}
			/>
		</div>
	);
};
