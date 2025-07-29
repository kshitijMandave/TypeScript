// Interfaces.ts
// This file contains TypeScript interfaces for user data structures.

// here we define the User interface
// which describes the shape of a user object.
interface User {
  name: string;
  age: number;
  password: string;
}

// The createUser function takes an object of type User and can be used to create a new user.
function createUser(obj: User) {}

// Example usage of the createUser function
// This will create a new user object with the specified properties.
createUser({ name: "John", age: 30, password: "Pass@123" });

// Interface : it's like a blueprint for an object.
// It defines the structure that an object should follow.
// The User interface requires three properties: name, age, and password.
