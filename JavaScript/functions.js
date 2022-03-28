// Function Declarations vs Expressions
console.log("Declaration vs Expressions");

// Function Declaration
console.log(`\nFunction declaration`);
function walk() {
  console.log("walk");
}

// Anonymous Function Expression
console.log(`\nAnonymous Function Expression`);
let run = function () {
  console.log("run");
};

// Named Function Expression
console.log(`\nNamed Function Expresson`);
let jump = function movement() {
  console.log("jump");
};

let move = run;

walk();
jump();
run();
move();

// Arguments
console.log(`\nArguments`);
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 10));

// The Rest Operator (...prices)
console.log(`\nRest operator`);
function valueToPay(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(valueToPay(0.1, 20, 30, 1, 45));

// Default Parameters
console.log(`\nDefault Parameters`);
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, 2, 1));
console.log(interest(10000));

// Getters and Setters
const person = {
  firstName: "John",
  lastName: "Weak",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = "John Weekend";
console.log(person);

// Try and Catch
console.log(`\nTry and Catch`);
const anotherPerson = {
  firstName: "John",
  lastName: "Week",
  get fullName() {
    return `${anotherPerson.firstName} ${anotherPerson.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  //   anotherPerson.fullName = true;
  anotherPerson.fullName = "";
} catch (e) {
  console.log(e);
}

// Let vs Var
console.log(`\nLet vs Var`)
function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      var color = 'red';
    }
  }
  console.log(i);
}
// var => function-scoped
// ES6 (ES2015): let, const => block-scoped
start();

// The this Keyword
console.log(`\n The this keyword`);
// method -> obj
// function -> global (window, global)

const video = {
  title: 'a',
         
  play() {
   console.log(this);
  }
 };
 video.stop = function() {
  console.log(this);
 };
 video.stop();

 function playVideo() {
  console. log(this);
}
playVideo();

function Video (title) {
  this.title = title;
  console. log(this);
}
const v = new Video ('b');

const movie = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags () {
   this.tags.forEach (function(tag) {
      console.log(this.title, tag);
   }, this);
  }
};
movie.showTags ();

// Changing this
console.log(`\nChanging this`);

const film = { 
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags () {
    this.tags.forEach (tag => {
      console.log(this.title, tag);
    });
  } 
};
film.showTags();


