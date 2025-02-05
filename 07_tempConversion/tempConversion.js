const convertToCelsius = function(arg) {
  return +((arg - 32) * 5 / 9).toFixed(1);
};

const convertToFahrenheit = function(arg) {
  return +(arg * 9 / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
