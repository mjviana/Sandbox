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
