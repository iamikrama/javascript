const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  setTimeout(function () {
    console.log("Async task is done!");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise is consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Task 2 done");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Task 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ikrama", email: "iamikrama@gmail.com" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hanzla", email: "Hanzla@gmail.com" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise is finished"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "xyz", email: "xyz@gmail.com" });
    } else {
      reject("Error: Xyz is not available");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
