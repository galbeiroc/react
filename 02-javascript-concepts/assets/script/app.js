// import newApiKey, { apiKey, abc as content } from "./utils.js";
// import apiKey from './utils.js';
// import * as utils from './utils.js';

// console.log(apiKey, abc, newApiKey);
// console.log(utils.default, utils.abc);
// console.log(apiKey, content);

// Functions
function greetUser(username, message = "Hello") {
  console.log(message, username);
}

greetUser("galbeiroc");
greetUser("galbeiroc", "Hello, What s up?");

function createGreeting(username, message = "Hello") {
  return `I am ${username}. ${message}`;
}

console.log(createGreeting("galbeiroc"));
console.log(createGreeting("galbeiroc", "Hello, What s up?"));

function combine(a, b, c) {
  return (a * b) / c;
}

console.log(combine(3, 4, 6));

// Objects
const user = {
  name: "galbeiroc",
  age: 34,
  greet() {
    console.log("Hello");
    console.log(this.name);
  },
};

user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("Leo", 33);
console.log(user1);
user1.greet();

// Arrays
const hobbies = ["sports", "cooking", "reading"];
console.log(hobbies[0]);

hobbies.push("working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "sports");
console.log(index);

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

// destructuring
const [firstName, lastName] = ["albeiro", "crespo"];
console.log(firstName, lastName);

const { name: userName, age } = { name: "albeiro", age: 34 };
console.log(userName, age);

function storeOrderWithout(order) {
  localStorage.setItem("id", order.id);
  localStorage.setItem("currency", order.currency);
}

function storeOrderWith({ id, currency }) { // destructuring
  localStorage.setItem("id", id);
  localStorage.setItem("currency", currency);
}

storeOrderWith({ id: 5, currency: "USD", amount: 15.99 });

// spread operator
const newHobbies = ['hiking'];
const mergeHobbies = [...hobbies, ...newHobbies];
console.log(mergeHobbies);

const extendedUser = {
  isAdmin: true,
  ...user
};
console.log(extendedUser);

function handleTimeOut() {
  console.log('Time Out');
}

const handleTimeOut2 = () => {
  console.log('Time out.. again');
}

setTimeout(handleTimeOut, 1000);
setTimeout(handleTimeOut2, 2000);

function greeter(greetFn, name) {
  greetFn(name)
};

greeter((name) => console.log('Hi '+ name), 'galbeiroc');

function init() {
  function greet() {
    console.log('Hi again!');
  }

  greet();
}
init();
