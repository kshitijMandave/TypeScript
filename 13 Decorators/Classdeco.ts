function Logger(constructor: Function) {
  console.log("Logging class:", constructor.name);
}

@Logger // 👈 Decorator applied
class Person {
  name = "Kshitij";
}
