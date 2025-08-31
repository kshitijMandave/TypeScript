// Interfaces

// here we are defining shape of our Object
interface Admin {
  name: string;
  email: string;
  age: number;
}

// function defination to print object details.
function getUser(obj: Admin) {
  console.log(`name ${obj.name}, Email ${obj.email}, Age ${obj.age}`);
}

// calling function and providing details.
getUser({ name: "Kshitij", email: "kshitij.mandave@gmail.com", age: 25 });
