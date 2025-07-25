// This is Our Simple Object
let user = {
  name: "Kshitij",
  age: 24,
  isActive: true,
};

// This is Our Simple Object with Type Annotations
function createUser({ name: string, age: number, isActive: boolean }) {}
createUser({ name: "Prabhas", age: 30, isActive: false });

export {};
