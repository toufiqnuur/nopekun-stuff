import mean from './mean.js';

const simpanganBaku = (arr) => {
	const _mean = mean(arr);
	const x = arr
		.filter((v, i, a) => {
			return a.indexOf(v) === i;
		})
		.map((v) => {
			return Math.pow(Math.abs(v - _mean), 2) * arr.filter((_v) => _v === v).length;
		})
		.reduce((a, b) => a + b);
	const n = arr.length;
	return { x, n };
};

export default simpanganBaku;
