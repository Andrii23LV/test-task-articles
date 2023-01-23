export const formateDate = (date: string): string => {
	let myDate = new Date(date);
	let month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	][myDate.getMonth()];

	let day = myDate.getDay() + 1 + 'th';

	return month + ' ' + day + ', ' + myDate.getFullYear();
};
