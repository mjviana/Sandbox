// Exercise 1- Array from Range
console.log("\nExercise 1- Array from Range");
const numbers = arrayFromRange(-10, 4);
console.log(numbers);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// Exercise 2- Includes
console.log("\nExercise 2- Includes");
const includesArray = [1, 2, 3, 4];

console.log(includes(includesArray, 11));

function includes(array, searchElement) {
  return array.includes(searchElement);
}

// Exercise 3- Except
console.log("\nExercise 3- Except");
const exceptArray = [1, 2, 3, 4, 1, 2];

const output = except(exceptArray, [1, 2]);

console.log(output);

function except(array, excluded) {
  const output = [];

  for (const element of array) {
    if (!excluded.includes(element)) output.push(element);
  }

  return output;
}

// Exercise 4- Moving an Element
console.log("\nExercise 4- Moving an Element");
const movingArray = [1, 2, 3, 4];
console.log("Array to move", movingArray);

const movedArray = move(movingArray, 1, -1);

console.log("Moved array", movedArray);

function move(array, index, offset) {
  const items = [...array];
  const position = index + offset;

  if (position >= array.length || position < 0) {
    console.error("Invalid Offset");
    return;
  }

  const element = items.splice(index, 1)[0];
  items.splice(index + offset, 0, element);

  return items;
}

// Exercise 5- Count Occurrences
console.log("\nExercise 5- Count Occurrences");
const arrayCountOccurences = [1, 2, 3, 4, 5, 2, 2, 2];

const occurances = countOccurences(arrayCountOccurences, 2);
const occurancesWithReduceMethod1 = countOccurencesWithReduceMethod1(
  arrayCountOccurences,
  2
);

console.log(occurances);
console.log(occurancesWithReduceMethod1);

function countOccurences(array, searchElement) {
  let output = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] === searchElement) output++;
  }
  return output;
}

function countOccurencesWithReduceMethod1(array, searchElement) {
  const output = array.reduce((accumulator, currentValue) => {
    if (currentValue === searchElement) accumulator++;
    return accumulator;
  }, 0);
  return output;
}

// Exercise 6- Get Max
console.log("\n Exercise 6- Get Max");
const arrayToCheckMaxNumber = [9, 2, 3, 4, 10, 12, 55, 112];

const max = getMax(arrayToCheckMaxNumber);
const maxReduceWay = getMaxReduceWay([9, 2, 3, 4, 10, 12, 55, 112]);

console.log(max);
console.log(maxReduceWay);

// simple way
function getMax(array) {
  let max = array[0];

  for (const element of array) {
    if (element > max) max = element;
  }
  return max;
}

// reduce way
function getMaxReduceWay(array) {
  return array.reduce((max, currentValue) => {
    return max > currentValue ? max : currentValue;
  });
}

// Exercise 7- Movies
console.log(`Exercise 7 - Movies`);

const movies = [
  { title: "title z", year: 2018, rating: 4.5 },
  { title: "title b", year: 2018, rating: 4.7 },
  { title: "title x", year: 2018, rating: 3 },
  { title: "title y", year: 2018, rating: 4.8 },
  { title: "title y", year: 2011, rating: 4.8 },
  { title: "title y", year: 2000, rating: 4 },
];

// all movies in 2018 with rating >= 4
// sort them by rating
// descending order
// pick their title

console.log(getGoodMoviesFrom2018(movies));

function getGoodMoviesFrom2018(movies) {
  const moviesFrom2018 = movies
    .filter((m) => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((m) => m.title);

  return moviesFrom2018;
}
