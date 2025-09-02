abstract class Animal {
  // abstract method → only declaration
  abstract makeSound(): void;

  // normal method → has implementation
  move(): void {
    console.log("Moving...");
  }
}

// ❌ Error: Cannot create instance of abstract class
// const a = new Animal();

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

const d = new Dog();
d.makeSound(); // "Woof! Woof!"
d.move();      // "Moving..."

const c = new Cat();
c.makeSound(); // "Meow!"
c.move();      // "Moving..."
