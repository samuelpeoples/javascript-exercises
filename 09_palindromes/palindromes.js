const palindromes = function (arg) {
    let newArray = [];
    for (i = arg.length; i >= 0; i--){
        newArray.push(arg.at(i));
    }
    return arg == newArray.join("");
};

// Do not edit below this line
module.exports = palindromes;
