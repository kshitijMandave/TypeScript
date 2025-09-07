import axios from "axios";

type NewPost = {
  title: string;
  body: string;
  userId: number;
};

async function createPost(post: NewPost) {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  return response.data;
}

createPost({ title: "Hello", body: "This is my first post!", userId: 1 })
  .then((data) => console.log("Created Post:", data))
  .catch((err) => console.error("Error:", err));
