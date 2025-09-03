// Promise with async/await a modern way to handle the promise

console.log("Pomise With Async Await");

async function getData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello From the promise");
    }, 2000);
  });
}

async function main() {
  try {
    const data = await getData();
    console.log("Data: ", data);
  } catch (err) {
    console.log("Error: ", err);
  }
}

main();
