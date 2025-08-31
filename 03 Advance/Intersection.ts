// Intersecton

type Usr = {
  name: string;
  age: Number;
};

type Amin = Usr & {
  getDetails(user: string): void;
};

function ab(a: Amin) {
  a.getDetails;
}
