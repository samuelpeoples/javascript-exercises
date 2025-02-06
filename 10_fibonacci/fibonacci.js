const fibonacci = function (arg) {
	arg = parseInt(arg);

	if (arg < 0) {
		return "OOPS";
	}
	if (arg <= 1) {
		return arg;
	}

	return fibonacci(arg - 1) + fibonacci(arg - 2);
};

// Do not edit below this line
module.exports = fibonacci;
