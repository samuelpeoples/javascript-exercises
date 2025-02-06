const palindromes = function (arg) {
	const alpha = "abcdefghijklmnopqrstuvwxyz1234567890";

	const cleanString = arg
		.toLowerCase()
		.split("")
		.filter((val) => alpha.includes(val))
		.join("");

	const reverseString = cleanString.split("").reverse().join("");

	return cleanString == reverseString;
};

// Do not edit below this line
module.exports = palindromes;
