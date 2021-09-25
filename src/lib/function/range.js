const range = (arr) => {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	return { min, max, res: max - min };
};
export default range;
