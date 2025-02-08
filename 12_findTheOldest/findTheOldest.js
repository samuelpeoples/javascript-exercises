function calculateAge(birthYear, deathYear) {
	if (!deathYear) {
		deathYear = new Date().getFullYear();
	}
	return deathYear - birthYear;
}

const findTheOldest = function (people) {
	/**
	 * Get birth years
	 * If year of death is defined, age == Birth Year - Death Year
	 * If year of death is undefined, age == Birth Year - Current Year
	 */

	return people.reduce((oldest, current) => {
		const oldestAge = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const currentAge = calculateAge(current.yearOfBirth, current.yearOfDeath);
		return currentAge > oldestAge ? current: oldest;
	});

	// let oldest;
	// people.forEach((person) => {
	// 	if (oldest == null) {
	// 		oldest = person;
	// 	}
	// 	if (calculateAge(person.yearOfBirth, person.yearOfDeath) > calculateAge(oldest.yearOfBirth, oldest.yearOfDeath)) {	
    //         oldest = person; }
	// });

	// return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
