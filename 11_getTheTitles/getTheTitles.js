const getTheTitles = function (array) {
	let booksTitles = [];
	for (let i = 0; i < array.length; i++) {
		booksTitles.push(array[i].title);
	}
	console.log(booksTitles);
	return booksTitles;
	/*return array.map((item) => item.title);*/
};

// Do not edit below this line
module.exports = getTheTitles;
