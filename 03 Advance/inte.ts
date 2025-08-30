// Interfaces

interface User {
  name: string;
  email: string;
  age: number;
}

function getUserData(user: User) {
  console.log(`${user.name}, ${user.email}, ${user.age}`);
}

getUserData({ name: "Kshitij", email: "kshitij.mandwe@gmail.com", age: 25 });
