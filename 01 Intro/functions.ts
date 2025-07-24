// functions in TS

// This is a simple function that takes two numbers and returns their sum
function addTwoNumbers(a: number, b: number) {
  return a + b;
}
// Calling the function with two numbers
console.log(addTwoNumbers(5, 10));
export {};

// function definition with type annotations
function signUpUser(username: string, password: string) {}

// Calling the function with two arguments
signUpUser("Kshitij", "password123");

// Arroqw function example
let logInUser = (name: string, password: string, isPaid: boolean = false) => {};

// Calling the arrow function with two arguments
logInUser("Kshitij", "password123");
