// @flow

const dateTimeFormatter = new window.Intl.DateTimeFormat('en-US', {
	hour: 'numeric',
	minute: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour12: false,
});

const formatDateTime = (date) => {
	return dateTimeFormatter.format(new Date(date));
};

export {
	formatDateTime,
}