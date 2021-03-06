//Exercise 1- Max of Two Numbers

console.log(`Exercise #1: ${maxOfTwoNumbers(1, 2)} \n`);

function maxOfTwoNumbers(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

//Exercise 2- Landscape or Portrait

console.log(`Exervise #2: ${isLandscape(252, 300)} \n`);

function isLandscape(width, height) {
  return width > height;
}

//Exercise 3- FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(15);
console.log(`Exercise #3: ${output} \n`);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  else if (input % 3 === 0) {
    return "fizz";
  } else if (input % 5 === 0) {
    return "fuzz";
  } else return input;
}

//Exercise 4- Demerit Points
// speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

console.log(`Exercise #4: ${checkSpeed(92)} \n`);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) return `Ok`;

  let points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) return `Points:  ${points} License suspended!`;

  return `Points:  ${points}`;
}

//Exercise 5 - Even and Odd Numbers

console.log(`Exercise #5: \n`);
showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? `EVEN` : `ODD`;
    console.log(i, message);
  }
}

//Exercise 6- Count Truthy
// Falsy
// undefined
// null
//
// false
// 0
// NaN

console.log(`Exercise #6: \n`);

const array = [0, 1, 2, 3, 4, null, "", "Mario"];

console.log(`Number of Truthy elements in array: `, countTruthy(array));

function countTruthy(array) {
  let numberOfTruthy = 0;
  for (const value of array) {
    console.log(value);
    if (value) numberOfTruthy++;
  }
  return numberOfTruthy;
}

//Exercise 7- String Properties
console.log("\nExercise #7 \n");

const movie = {
  title: "The Batman",
  releaseYear: 2022,
  rating: 4.5,
  director: "Matt Reeves",
};

showProperties(movie);

function showProperties(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

//Exercise 8- Sum of Multiples of 3 and 5
console.log("\nExercise #8\n");

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

//Exercise 9- Grade
// 1-59: F
// 60-69:D
// 70-79:C
//80-89: B
// 90-100: A

console.log("\n Exercise #9\n");

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  average = calculateAverage(marks);

  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  if (average < 100) return "A";
  return "F";
}

function calculateAverage(array) {
  let sum = 0;
  for (const value of array) sum += value;

  return sum / array.length;
}

//Exercise 10- Stars
console.log("\nExercise #10\n");

showStars(10);

function showStars(rows) {
  for (let i = 0; i < rows; i++) {
    let stars = "";
    for (let j = 0; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

//20- Exercise- Prime Numbers
// Prime (whose factors are only 1 and itself)
// Composite
// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors
// 11 = 1, 11
// 13 = 1, 13

console.log("\nExercise #11\n");

showPrimes(20);

function showPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) console.log(i);
  }
}
