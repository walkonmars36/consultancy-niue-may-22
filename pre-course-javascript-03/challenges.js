/* 1 : Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
isNumberPositive(-1); // returns false
isNumberPositive(10); // returns true 
*/

const isNumberPositive = (num) => {
  return num >= 0;
};

console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true

//////////////////////////////////////
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

/////////////////////////////////////////
/* 3: Write a function that takes three numbers and returns the largest of the three numbers.
getLargestNumber(2 ,1, 4); // returns 4
getLargestNumber(6,2,3); // returns 6
*/

const getLargestNumber = (num1, num2, num3) => {
  const largestNum = Math.max(num1, num2, num3);
  return largestNum;
};

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));

////////////////////////////////////////
/* 4: Write a function that takes an array of names and returns the last name from the array of names.
getLastName([”Charlie”, “Rob”, “Andy”]); // returns “Andy”
getLastName(["Ash","Stu"]); // returns "Stu"
*/

const getLastName = (array) => {
  const lastname = array[array.length - 1];
  return lastname;
};

console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash", "Stu"]));
