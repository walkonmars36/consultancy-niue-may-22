/* 1 : Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
isNumberPositive(-1); // returns false
isNumberPositive(10); // returns true 
*/

const isNumberPositive = (num) => {
  return num >= 0;
};

console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true

/* 2: Write a function that takes a number of days and converts it into an age.
convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18
*/

const convertDaysToAge = (num) => {
  const age = num / 365;
  return age;
};

console.log(convertDaysToAge(3650)); // returns 10
console.log(convertDaysToAge(6570)); // returns 18
