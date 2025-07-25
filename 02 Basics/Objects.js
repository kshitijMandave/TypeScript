"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is Our Simple Object
var user = {
    name: "Kshitij",
    age: 24,
    isActive: true,
};
// This is Our Simple Object with Type Annotations
function createUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isActive;
}
createUser({ name: "Prabhas", age: 30, isActive: false });
