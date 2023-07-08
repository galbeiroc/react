// import newApiKey, { apiKey, abc as content } from "./utils.js";
// import apiKey from './utils.js';
// import * as utils from './utils.js';

// console.log(apiKey, abc, newApiKey);
// console.log(utils.default, utils.abc);
// console.log(apiKey, content);

function greetUser(username, message = 'Hello') {
  console.log(message, username);
}

greetUser('galbeiroc');
greetUser('galbeiroc', 'Hello, What s up?');

function createGreeting(username, message = 'Hello') {
  return `I am ${username}. ${message}`;
}

console.log(createGreeting('galbeiroc'));
console.log(createGreeting('galbeiroc', 'Hello, What s up?'));

function combine(a, b, c) {
  return a * b / c
}

console.log(combine(3,4, 6));


const user = {
  name: 'galbeiroc',
  age: 34,
  greet() {
    console.log('Hello');
    console.log(this.name);
  }
}

user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hi!');
  }
}


const user1 = new User('Leo', 33);
console.log(user1);
user1.greet();
