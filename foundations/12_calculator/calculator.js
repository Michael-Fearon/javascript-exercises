const add = function(...inputs) {
  let total = 0;
  for (let i =0; i < inputs.length; i++){
    total += inputs[i];
  }
	return total;
};

const subtract = function(...inputs) {
  let total = inputs[0] - inputs[1];
	return total;
};

const sum = function(array) {
  let total = 0;
  for (let i =0; i < array.length; i++){
    num = array[i];
    console.log('num', num)
    total += num;
  }
	return total;
};

const multiply = function(array) {
  let total = 0;
  for (let i =0; i < array.length; i++){
    if (i===0){
      total+= array[i];
    } else {
      total *= array[i];
    }
  }
	return total;
};

const power = function(base, exponent) {
  let total = base;
  for (let i=1; i < exponent; i++){
    total *= base;
  }
  return total;
	
};

const factorial = function(n) {
  let total = 1;

  for (let i=1; i<=n; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
