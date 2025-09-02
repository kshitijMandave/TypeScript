/*
 * Function Overloading - This function can be called in multiple ways, but implementation is only one.
 */

function add(a: number, b: number): number; // signature 1
function add(a: string, b: string): string; // signature 2

function add(a: any, b: any): any {
  // actual implementation
  return a + b;
}

console.log(add(5, 10)); // 15
console.log(add("Hello ", "TS")); // "Hello TS"
