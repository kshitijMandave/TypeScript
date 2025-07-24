"use strict";
// functions in TS
Object.defineProperty(exports, "__esModule", { value: true });
// This is a simple function that takes two numbers and returns their sum
function addTwoNumbers(a, b) {
    return a + b;
}
// Calling the function with two numbers
console.log(addTwoNumbers(5, 10));
// function definition with type annotations
function signUpUser(username, password) { }
// Calling the function with two arguments
signUpUser("Kshitij", "password123");
// Arroqw function example
var logInUser = function (name, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// Calling the arrow function with two arguments
logInUser("Kshitij", "password123");
