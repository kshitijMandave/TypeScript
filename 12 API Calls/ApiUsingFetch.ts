// api.ts
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  const data: Post[] = await response.json();
  return data;
}

// Call the function
getPosts()
  .then((posts) => {
    console.log("Posts:", posts.slice(0, 3));
  })
  .catch((err) => {
    console.error("Error fetching posts:", err);
  });
