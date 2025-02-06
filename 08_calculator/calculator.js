const add = function (...args) {
	let sum = args[0];
	for (let i = 1; i < args.length; i++) {
		sum += args[i];
	}
	return sum;
};

const subtract = function (...args) {
	let sum = args[0];
	for (let i = 1; i < args.length; i++) {
		sum -= args[i];
	}
	return sum;
};

const sum = function (args) {
	return args.reduce((total, val) => total + val, 0);
};

const multiply = function (args) {
	return args.reduce((total, val) => total * val);
};

const power = function (num, power) {
	return Math.pow(num, power);
};

const factorial = function (arg) {
	let sum = 1;
	for (let i = arg; i > 0; i--) {
		sum *= i;
	}
	return sum;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
