"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is Our Simple Object
let user = {
  name: "Kshitij",
  age: 24,
  isActive: true,
};
// This is Our Simple Object with Type Annotations
function cUser({ name, age, isActive }) {
  console.log(name, age, isActive);
}

cUser({ name: "Kshitij", age: 24, isActive: true });
// This is Our Simple Object with Type Annotations and Interface
