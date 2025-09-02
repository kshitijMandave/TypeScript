// Defualt Parameter
function abcde(name: string, age: number, company: string = "Infosys") {
  console.log("I'm the function");
  console.log(name, age, company);
}
abcde("Kshitij Mandave", 24); // it will set defualt as a Infosys.
abcde("Harshal Pohankar", 25, "Microsoft"); // but if u'll pass the Company It will replace.
// If we want to Make anything defualt, so we need to initialize value with parameter
