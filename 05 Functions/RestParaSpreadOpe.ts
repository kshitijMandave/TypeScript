// ... Rest/Spread

// Rest Parameter - if we gave multiple arguments and we want to store in one variable as an array
function abcdf(...args: (string | number)[]) {
  console.log(args);
}

// If we have multiple arguments, and we don't know how much
abcdf("Kshitij", "Male", "India"); // if we have strings give only string.
abcdf("Kshitij", 25, "male"); // but if we have multiple types give (s|n)

function abcdefg(...args: number[]) {
  console.log(args);
}
abcdefg(10, 20, 30, 40, 60, 70, 80, 90, 100); // this will give error as no parameter is defined in function

// Spread

let arr = [1, 5, 37, 58, 56];
console.log(arr);

let arr1 = [...arr]; // It saying like give me the all the elements of arr
console.log(arr1);
