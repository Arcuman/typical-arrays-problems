
exports.max = function min(array) {
	if (array == null || array.length == 0)
		return 0;
	var maxValue = array[0];
	for (var i = 1; i < array.length; i++) {
		var currentValue = array[i];
		if (currentValue > maxValue) {
			maxValue = currentValue;
		}
	}
	return maxValue;
}

exports.min = function max(array) {
	if (array == null || array.length == 0)
		return 0;
	var minValue = array[0];
	for (var i = 1; i < array.length; i++) {
		var currentValue = array[i];
		if (currentValue < minValue) {
			minValue = currentValue;
		}
	}
	return minValue;
}

exports.avg = function avg(array) {
	if (array == null || array.length == 0)
		return 0;
	var avg = 0;
	for (var i = 0; i < array.length; i++) {
		avg += array[i];
	}
	return avg / array.length;
}
