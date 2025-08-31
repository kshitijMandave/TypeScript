// Extending Interface

// shape of object
interface Uer {
  name: string;
  email: string;
  password: string;
}

// shape of object  name Admin where it has Uer Properties also.
interface Admin extends Uer {
  admin: boolean;
}

function getUser(obj: Uer) {}
