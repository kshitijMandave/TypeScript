// Type Guards
function abcdefgh(arg) {
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
