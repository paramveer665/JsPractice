// function myName(number) {
//   console.log("akshay");
//   console.log("akshay");
//   console.log("akshay");
//   console.log("akshay");
//   console.log("akshay");
//   console.log(i + i);

//   console.log(number);
// }
// i = 0;
// ++i;
// myName(i);
// ++i;
// myName(i);
// ++i;
// myName(i);

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  return number1 + number2;
}

const result = addTwoNumbers(9, 11);
// console.log(result);

function loggedinUser(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} has logged in`;
}

// console.log(loggedinUser("akshay"));

function calculateCartPrice(val1, val2, ...num1) {
  console.log(val1, val2);

  return num1;
}

// console.log(calculateCartPrice(400, 100, 850, 1000, 200));

const user = {
  name: "akshay",
  age: 20,
};

function drinkingAge(newObject) {
  if (!user.age) {
    return "user age does not exists";
  }
  if (user.age >= 18) {
    return `User ${user.name} can drink as he is ${user.age} years old`;
  }
  return "user is under age";
}

const candrink = drinkingAge(user);

// console.log(candrink);

// (function ashu() {
//   console.log("BYE");
// })();

((name) => {
  console.log(name);
})("akshay");

(function chai(name) {
  console.log(name);
})("akshay chauhan");
