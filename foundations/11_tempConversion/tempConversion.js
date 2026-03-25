const convertToCelsius = function(f) {
  return round((f - 32) / (9/5));
};

const convertToFahrenheit = function(c) {
  return round(c * 9/5 + 32);
};

const round = function(input) {
  return Math.round(input * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
