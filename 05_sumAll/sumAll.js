const sumAll = function (arg1, arg2) {
    if (!Number.isInteger(arg1, arg2) || (arg1 || arg2) < 0) { return "ERROR"; }
    if (typeof(arg1, arg2) != "number") { return "ERROR"; }
    let lesserVal;
    let greaterVal;
    
    if (arg1 <= arg2){ lesserVal = arg1; greaterVal = arg2; }
    else { lesserVal = arg2; greaterVal = arg1; }
    
    let sum = 0;
    for (let i = lesserVal; i <= greaterVal; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
