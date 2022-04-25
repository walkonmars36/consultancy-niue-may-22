/* 1 : Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
isNumberPositive(-1); // returns false
isNumberPositive(10); // returns true 
*/

const isNumberPositive = (num) => {
  return num >= 0;
};

console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true
