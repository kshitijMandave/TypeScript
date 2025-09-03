// Promise --> Think like it's a object where we store and manage the data.
console.log("Promise Domination");
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Data Received"); //success after 2 sec
  }, 2000);
});
promise
  .then(function (successData) {
    console.log("Sucess!!", successData);
  })
  .catch(function (error) {
    console.log("Error: Something went wrong", error);
  });
