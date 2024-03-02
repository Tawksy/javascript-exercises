const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 0;

  if (array.length === 0) {
    return 1;
  }
  product = array[0];
  for (let i = 1; i < array.length; i++){
    product = product * array[i];
  }
  return product;
};


const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(a) {
  let factorialsum = 0;
  if (a === 0 || a === 1){
    factorialsum = 1;
    return factorialsum;
  }
else {
    let rval = 1;
    for (let i = 2; i <= a; i++){
        rval = rval * i;
      }
    return rval;
}
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
