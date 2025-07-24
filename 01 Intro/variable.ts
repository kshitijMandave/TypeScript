let greetings: string = "Hello, Kshitij!";

/* String
------------
greetings = 6; //This line will cause a TypeScript error because `greetings` is expected to be a string, not a number.*/

console.log(greetings);

/*
Number variable example:

In TypeScript or JavaScript, there's no separate type for integers or floating-point numbers.
Both are considered as 'number' type.

Examples:
123      → number (integer)
123.45   → number (floating-point)

So whether it's a whole number or a decimal, it's always 'number'.
*/

let myNum: number = 6;
console.log(myNum); // This will log the number 6 to the console.

/*
Boolean
----------
*/

let isLoggedIn: boolean = true;
console.log(isLoggedIn); // This will log true to the console.

export {}; // This code defines a string variable `greetings` and logs it to the console.
