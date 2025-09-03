// Promise --> Think like it's a object where we store and manage the data.

console.log("Promise Domination");

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Received"); //success after 2 sec
  }, 2000);
});

promise
  .then((successData) => {
    console.log("Sucess!!", successData);
  })
  .catch((error) => {
    console.log("Error: Something went wrong", error);
  });
