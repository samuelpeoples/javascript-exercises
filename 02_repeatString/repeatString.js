const repeatString = function(entry, repeatsNum) {
    if (repeatsNum < 0) { return "ERROR" }
    let string = ''
    for (let i = 0; i < repeatsNum; i++) {
        string += entry;
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
