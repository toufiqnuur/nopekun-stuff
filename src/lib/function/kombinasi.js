const makeArray = (min, max) => {
	let res = [];
	for (let i = max; i >= min; i--) {
		res.push(i);
	}
	return res;
};

const kombinasi = (n, r) => {
	if (n && r) {
		let _n = makeArray(1, n);
		_n = _n.filter((v) => makeArray(1, r).indexOf(v) == -1);
		let _r = makeArray(1, n - r);
		_n = _n?.reduce((a, b) => a * b);
		_r = _r?.reduce((a, b) => a * b);
		return _n / _r;
	}
	return 0;
};

export default kombinasi;
