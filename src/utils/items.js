const getX = dateString => {
	const [y, m, d] = dateString.split('-');

	return Date.UTC(y, m - 1, d);
};

const getDataItem = (dateString, amount = 0) => {
	return {
		x: getX(dateString),
		y: amount,
	};
}

export {
	getDataItem
}