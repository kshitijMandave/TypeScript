import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

getUsers()
  .then((users) => {
    console.log("Users:", users);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
