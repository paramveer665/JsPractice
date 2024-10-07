const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let login = true;
    const user = { username: "raj", password: "123" };
    if (login) {
      resolve(user);
      console.log("Login successful");
    } else {
      reject("You need to login first");
    }
  }, 2000);
});

// promiseOne
//   .then(function (user) {
//     const data = user.username;
//     return data;
//   })
//   .then(function (data) {
//     console.log("hi", data);
//   })
//   .catch(function () {
//     console.log("Login failed");
//   });

async function asyncPromise() {
  try {
    const response = await promiseOne;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
asyncPromise();

// async function getGit() {
//   try {
//     const response = await fetch("https://api.github.com/users/paramveer665");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getGit();

fetch("https://api.github.com/users/paramveer665")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => console.log(error));
