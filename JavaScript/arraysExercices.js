// Exercise 1- Array from Range
const numbers = arrayFromRange(-10, 4);
console.log(numbers);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// Exercise 2- Includes
const includesArray = [1, 2, 3, 4];

console.log(includes(includesArray, 11));

function includes(array, searchElement) {
  return array.includes(searchElement);
}

// Exercise 3- Except
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
const arrayCountOccurences = [1, 2, 3, 4, 5, 2, 2, 2];

const occurances = countOccurences(arrayCountOccurences, 2);
const occurancesWithReduceMethod1 = countOccurencesWithReduceMethod1(
  arrayCountOccurences,
  2
);
const occurancesWithReduceMethod2 = countOccurencesWithReduceMethod2(
  arrayCountOccurences,
  2
);

console.log(occurances);
console.log(occurancesWithReduceMethod1);
console.log(occurancesWithReduceMethod2);

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

function countOccurencesWithReduceMethod2(array, searchElement) {
  const output = array.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue, searchElement);
    if (currentValue === searchElement) accumulator++;
    return accumulator;
  }, 0);
  return output;
}
