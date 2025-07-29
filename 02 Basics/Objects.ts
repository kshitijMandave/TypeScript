// This is Our Simple Object
let user = {
  name: "Kshitij",
  age: 24,
  isActive: true,
};

// This is Our Simple Object with Type Annotations
function cUser({
  name,
  age,
  isActive,
}: {
  name: string;
  age: number;
  isActive: boolean;
}) {
  console.log(name, age, isActive);
}

export {};
