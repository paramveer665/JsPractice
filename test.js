let mydate = new Date();

// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());

// const myArr = [1, 2, 3, 4, 5];

// const myHero = ["sanjay", "akshay", "henry cavil"];

// console.log(myHero);

// const myna1 = myArr.slice(1, 3);
// console.log("A", myArr);

// console.log(myna1);

// const myna2 = myArr.splice(1, 3);

// console.log("A", myArr);

// console.log(myna2);
// const mum = ["mausi", "mama", "nani", "nana"];

// const dad = ["chacha", "tau", "dadi", "dada"];

// mum.push(dad);

// console.log(mum);

// let lname = "rahul";
// let age = 20;
// let designation = "clerk";
// console.log(Array.of(lname, age, designation));
// const naam = Array.from("Mera naam mukesh hai");

// console.log(Array.isArray(naam));

const mySym = Symbol("mykey1");

const user = {
  name: "akshay",
  [mySym]: "mykey",
  batch: 2024,
  branch: "mca",
  HOD: "belvoed vani",
  marks: [20, 24, 39, 22],
};

// console.log(user);

user.moto = function () {
  console.log("Jai mata di");
};

console.log(user["marks"]);
console.log(user["batch"]);
console.log(user);
