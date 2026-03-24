const convertToCelsius = function(f) {
  c = round((f - 32) / (9/5));
  console.log(f, c);
  return c;
};

const convertToFahrenheit = function(c) {
  f = round(c * 9/5 + 32);
  console.log(c, f);
  return f;
};

const round = function(input) {
  return Math.round(input * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
