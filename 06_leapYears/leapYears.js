const leapYears = function (year) {
    let isStandard = year % 4 === 0;
    let isCentury = year % 100 === 0;
    let isCenturyLeap = year % 400 === 0;

    return isStandard && (!isCentury || isCenturyLeap);
};

// Do not edit below this line
module.exports = leapYears;
