// Object-oriented programming (OOP)
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw(); // Method

// Factory Functions
function createCircle(radius, location, isVisible) {
  return {
    radius,
    location,
    draw() {
      console.log("draw");
    },
    isVisible,
  };
}

const location1 = {
  x: 1,
  y: 1,
};
const location2 = {
  x: 2,
  y: 2,
};

const circle1 = createCircle(1, location1, true);
console.log(`\ncircle #1: \n`, circle1);
circle1.draw();

const circle2 = createCircle(2, location2, false);
console.log(`\ncircle #2: \n`, circle2);
circle2.draw();

// Constructor Functions
function Circle(radius, location, isVisible) {
  this.radius = radius;
  this.location = location;
  this.isVisible = isVisible;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle3 = new Circle(3, (location = { x: 3, y: 4 }), true);

console.log(`\n circle #3: \n`, circle3);
circle3.draw();

// Dynamic Nature of Objects
const circle4 = {
  radius: 1,
};

circle4.color = "yellow";
circle4.draw = function () {};
console.log(`\n circle whith added propety and function:`, circle4);

delete circle4.color;
delete circle4.draw;

console.log(`\n circle whith removed propety and function: `, circle4);

// Functions are Objects
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const Circle5 = new Function(
  "radius",
  ` this.radius = radius;
this.draw = function () {
  console.log("draw");
}`
);

const circle7 = new Circle5(1);
console.log(circle7);

const another = new Circle(1);
console.log(another);

// Value vs Reference Types
let x = 10;
let y = x;

let o = { value: 10 };
x = 20;
g = o;

let number = 10;
let anotherNumber = { value: 10 };

function increase(number) {
  number++;
}

function increaseAnotherNumber(anotherNumber) {
  anotherNumber.value++;
}

increase(number);
increaseAnotherNumber(anotherNumber);
console.log(number);
console.log(anotherNumber.value);

//  Enumerating Properties of an Object
const circlee = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
for (let key in circlee) console.log(key, circlee[key]);
for (let key of Object.keys(circlee)) console.log(key);
for (let entry of Object.entries(circlee)) console.log(entry);
if ("color" in circlee) console.log("yes");

// Cloning an Object
const circleee = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
// const another = {};
// for (let key in circle)
// another[key] = circle[key];

const anotherr = Object.assign({}, circle);
const anotherrr = { ...circle };
console.log(another);

// Date
const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);
now.setFullYear(2017);
