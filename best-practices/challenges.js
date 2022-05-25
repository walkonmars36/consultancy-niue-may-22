/* 
Create functions for the following tasks:
*/

// - Print the odd numbers less than given parameter
const printOddNumbers = (num) => {
  for (let i = 1; i < num; i += 2) {
    console.log(i);
  }
};
printOddNumbers(100);

//  - Calculate the sum of numbers from 1 to a given parameter
const calculateNumRange = (numRange) => {
  let total = 0;

  for (let i = 1; i <= numRange; i++) {
    total += i;
  }

  return total;
};

const sumOfHundred = calculateNumRange(100);
console.log(sumOfHundred);

//  - Calculate the sum of odd numbers greater than 10 and less than a given parameter
const calculateOddFromTen = (num) => {
  let sum = 0;

  for (let i = 10; i < num; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
};

calculateOddFromTen(20);

// - Create a function that will convert from Celsius to Fahrenheit
const celsiusToFahrenheit = (tempInCelsius) => {
  const tempInFahrenheit = (tempInCelsius * 9) / 5 + 32;

  console.log(tempInFahrenheit);
  return tempInFahrenheit;
};
celsiusToFahrenheit(35);

/* 
Tricky One!!


For this challenge, the value of the any property from any object should be extracted and stored in an array. e.g. If I wanted the name values of an object I would pass in the object and a 'name' parameter into a function to extract those values.
*/

let input = [
  {name: "John", age: 21, city: "New York"},
  {name: "Mike", age: 28, city: "Moscow"},
  {name: "Danny", age: 30, city: "London"},
  {name: "Lisa", age: 26, city: "Paris"},
  {name: "Sophie", age: 19, city: "Berlin"},
];

const anyProperty = (array, searchKey) => {
  const val = array.map((entry) => {
    return entry[searchKey];
  });
  return val;
};

console.log(anyProperty(input, "city"));
