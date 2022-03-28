// Exercise 1- Sum of Arguments
console.log(`Exercise 1- Sum of Arguments`);

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));
console.log(sum([1, 2, 3, 4]));

// Exercise 2 - Area of Circle
console.log(`\nExercise 2- Area of Circle`);

const circle = {
  radius: 1,
  get area() {
    return Math.PI * (this.radius * this.radius);
  },
};

console.log(circle.area);
circle.radius = 2;
console.log(circle.area);

// Exercise 3- Error Handling
console.log(`\nError handling`);

try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurrences(true, 1);
  console.log(count);
} catch (error) {
  console.error(error.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Value is not an array");

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
