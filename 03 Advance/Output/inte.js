"use strict";
// Interfaces
function getUserData(user) {
  console.log(`${user.name}, ${user.email}, ${user.age}`);
}
getUserData({ name: "Kshitij", email: "kshitij.mandwe@gmail.com", age: 25 });
