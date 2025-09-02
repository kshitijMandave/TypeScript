class Student {
  private _name: string; // real storage

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name; // safe, no conflict
  }

  set name(value: string) {
    this._name = value; //  safe, avoids recursion
  }
}

const s = new Student("Rakesh");
console.log(s.name); // uses getter → "Rakesh"
s.name = "Kshitij"; // uses setter
console.log(s.name); // "Kshitij"
