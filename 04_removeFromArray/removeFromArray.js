const removeFromArray = function(array, ...valToRemove) {
    //return array.filter(val => !valToRemove.includes(val));

    const newArray = [];
    array.forEach(element => {
        if(!valToRemove.includes(element)){ newArray.push(element) };
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
