const user = {
  name: "",
  //   age:  24,
  gender: "",
};

const studentMarks = [30, 26, 37, 32];

// if (Object.keys(user).length === 0) {
//   console.log("object is empty");
// } else if (Object.values(user).length > 0) {
//   console.log(`Object contains " ${Object.values(user)} " attributes`);
// }

// if (studentMarks.length === 0) {
//   console.log("no marks present in database for user");
// } else {
//   console.log(`Users marks are ${studentMarks}`);
// }

// console.log(null == 0);

const map = new Map();

map.set("IND", "India");
map.set("JP", "JAPAN");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, " :- ", value);
}

const myobj = {
  // name: "akshay",
  // age: 20,
  // education: mca,

  IN: "India",
  JP: "Japan",
  IND: "Indonesia",
};

// for (const obj of myobj) {
//   console.log(obj);
// }

// for (const keys in myobj) {
//   console.log(`${keys} is short formm of ${myobj[keys]}`);
// }

const format = [
  {
    username: "abcde",
    email: "efgh@gmail.com",
    password: "12345",
  },
  {
    username: "abde",
    email: "efXL@gmail.com",
    password: "12345",
  },
  {
    username: "DDEX",
    email: "FFOgh@gmail.com",
    password: "12345",
  },
];

format.forEach((item) => {
  // console.log(item.email);
});

hello(goodbye);

function hello(callback) {
  setTimeout(() => {
    console.log("hello");
    callback();
  }, 3000);
}

function goodbye() {
  console.log("goodbye");
}
