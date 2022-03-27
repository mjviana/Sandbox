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

// Local vs Global Scope
