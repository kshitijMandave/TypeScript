// Type Guards--> it a type narrowing
function abcdefgh(arg: number | string) {
  if (typeof arg === "number") {
    return "number";
  } else if (typeof arg === "string") {
    return "string";
  } else {
    throw new Error("Kuch Bhi");
  }
}

console.log(abcdefgh(15));
console.log(abcdefgh("Kshitij"));
