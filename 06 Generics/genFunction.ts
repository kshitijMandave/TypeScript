/*
 * Generics
--------------
Whenever we want create a function which can accept the any type of arguments. we use it.
 */

// Generic function
function ab<T>(args: T) {}

ab<string>("Kshitij");
ab<number>(25);
ab<string>("Male");
