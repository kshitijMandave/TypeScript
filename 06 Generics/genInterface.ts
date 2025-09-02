interface In<T> {
  name: string;
  age: number;
  key: T; // key can be anything, that's why
}

function createUser(obj: In<string>) {
  obj.key;
}

createUser({ name: "Kshitij", age: 25, key: "gf5h25hdf5" });
