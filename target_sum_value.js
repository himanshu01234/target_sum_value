function sum_pair_value(target, arr) {
	let sum = 0;
	for (i = 0; i < arr.length - 1; i++) {
		for (j = i + 1; j < arr.length; j++) {
			sum = arr[i] + arr[j];
			if (target == sum) return [i, j];
		}
	}
}
sum_pair_value(11, [2, 5, 9, 11]);
