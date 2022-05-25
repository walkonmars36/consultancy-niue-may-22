// PURE FUNCTIONS

// - With a given input, they always return the same output
// - They do not rely on any variable outside their scope
// - They do not modify the state of the application (side effects)

const obj = {a: 0};

const notPure = (input) => {
  input.a = input.a + 1;
  return input.a;
};
// console.log(obj)
// notPure(obj)
// console.log(obj)
// notPure(obj)
// console.log(obj)

// Example of Pure Function

const pure = (input) => {
  let output = input.a + 1;
  return output;
};

console.log(pure(obj));
console.log(pure(obj));

// --------------------------------------------------------------------------------------------- //
let a = 1;
let impure = (input) => {
  let output = input * a;
  return output;
};

// Depending on global variables - This function COULD return a different value at different points

const findUser = (users, item) => {
  const reversedUsers = [...users].reverse();
  const found = reversedUsers.find((user) => {
    user === item;
  });
  return found;
};

const user = findUser(array, "Sam");

const changeUser = (id, user) => {
  document.getElementById(id).innerText = user;
};

for (let index = 0; index < 50; index++) {
  changeUser(id + index, user + 1);
}

// This function has more than one job! It should just find user! This function also manipulates the DOM!!
// Side effects - Manipulating a global variable!
