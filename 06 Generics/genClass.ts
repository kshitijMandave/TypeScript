class CarMaker<T> {
  constructor(public key: T) {}
}

let c1 = new CarMaker<string>("Hey");
let c2 = new CarMaker<number>(123);
console.log(c1, c2);
