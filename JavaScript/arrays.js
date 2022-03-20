// Adding Elements
console.log(`adding elements`);
const numbers = [3, 4];

// end
numbers.push(5, 6);
console.log(numbers);

// beginning
numbers.unshift(1, 2);
console.log(numbers);

// middle
numbers.splice(2, 0, "a", "b");
console.log(numbers);

// Finding Elements (Primitives)
console.log(`\nfindig elements (primitives)`);
const newNumbers = [1, 2, 3, 4, 1];

console.log(newNumbers.indexOf("a"));
console.log(newNumbers.indexOf(2));
console.log(newNumbers.lastIndexOf(1, 2));
console.log(newNumbers.lastIndexOf(1));
console.log(newNumbers.indexOf("1"));

// check if number is in the array (return boolean)
console.log(newNumbers.indexOf(1) !== -1);
console.log(newNumbers.includes(1));

// Finding Elements (Reference Types)
console.log(`\nFinding Elements (Reference Types)`);
const courses = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
];

const course = courses.find(function (course) {
  return course.name === "a";
});
console.log(course);

const courseIndex = courses.findIndex(function (course) {
  return course.name === "a";
});
console.log(courseIndex);

// Arrow Functions
console.log(`\nArrow functions`);
const aCourse = courses.find((course) => course.name === "a");

console.log(aCourse);

//  Removing Elements
console.log(`\nRemoving elements`);
const removeNumbers = [1, 2, 3, 4, 5];

// add element at the end of the array
removeNumbers.push();
// add element at the begining of the array
removeNumbers.unshift();
// add element somewhere in the middle of the array
removeNumbers.splice();

// remove at the end
console.log("original array:", removeNumbers);
const last = removeNumbers.pop();
console.log("removed element:", last);
console.log("array after removing last element:", removeNumbers);

// remove at the begining
const first = removeNumbers.shift();
console.log("removed element:", first);
console.log("array after removing the first element:", removeNumbers);

// remove from the middle
const middle = removeNumbers.splice(1, 1);
console.log("removed element:", middle);
console.log("array after removing a middle element", removeNumbers);

// Emptying an Array
console.log(`\nEmptying an Array`);
let emptyingArray = [1, 2, 3, 4];
let anotherEmptyingArray = emptyingArray;
let yetAnotherEmptyArray = emptyingArray;

console.log(`Original array:`, emptyingArray);

// solution 1 (only works for the orginal reference)
console.log(`\nSolution 1 (only works for the original reference)`);
emptyingArray = [];
console.log(`Array after emptying:`, emptyingArray);
console.log(
  `Another array that references the original array (it does not get empty)`,
  anotherEmptyingArray
);
console.log(
  `Yeat another array that references the original array (it does not get empty)`,
  anotherEmptyingArray
);

// solution 2 (multiple references) -> BEST SOLUTION
console.log(`\nSolution 2 (works for multiple references)`);
emptyingArray = [1, 2, 3, 4];
anotherEmptyingArray = emptyingArray;
yetAnotherEmptyArray = emptyingArray;

emptyingArray.length = 0;
console.log(`Array after set length = 0:`, emptyingArray);
console.log(
  `Another array that references the original array (it does get empty):`,
  anotherEmptyingArray
);
console.log(
  `Yet another array that references the original array (it does get empty):`,
  yetAnotherEmptyArray
);

// solution 3 (with splice)
console.log(`\nSolution 3 (with splice method, works for multiple references)`);
emptyingArray = [1, 2, 3, 4];
anotherEmptyingArray = emptyingArray;
yetAnotherEmptyArray = emptyingArray;

emptyingArray.splice(0, emptyingArray.length);
console.log(`Array after splice method:`, emptyingArray);
console.log(
  `Another array that references the original array (it does get empty):`,
  anotherEmptyingArray
);
console.log(
  `Yet another array that references the original array (it does get empty):`,
  yetAnotherEmptyArray
);

// solution 4 (with pop method)
console.log(`\nSolution 4 (with pop method and while cycle)`);
emptyingArray = [1, 2, 3, 4];
anotherEmptyingArray = emptyingArray;
yetAnotherEmptyArray = emptyingArray;

while (emptyingArray.length > 0) {
  emptyingArray.pop();
}

console.log(`Array after pop method:`, emptyingArray);
console.log(
  `Another array that references the original array (it does get empty):`,
  anotherEmptyingArray
);
console.log(
  `Yet another array that references the original array (it does get empty):`,
  yetAnotherEmptyArray
);

// Combining and Slicing Arrays
console.log(`\nCombining and slicing arrays`);
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

console.log("Original array:", a1);
const combined = a1.concat(a2);
console.log("combined array after concact method:", combined);

const sliced = combined.slice(1, 4);
console.log("result of slicing the combined array", sliced);

// another method for slice method
const slicedV2 = combined.slice(2);
console.log(
  "result of slicing the comined array with slice method v2:",
  slicedV2
);

// another method for slice method (copies the full array)
const slicedV3 = combined.slice();
console.log("result of scling the whole combined array (copy):", slicedV3);

// arrays of objects

const arrayOfObjectsAndNumbers = [{ id: 1 }, { id: 2 }, 3];
const combinedv2 = arrayOfObjectsAndNumbers.concat(a1);

console.log(
  `original value of array of combined objects and numbers:`,
  combinedv2
);

combinedv2[0].id = 10;
combinedv2[3] = 300;

console.log(
  `Value of array of combined objects and numbers after changes (reference type vs value type):`,
  combinedv2
);

// The Spread Operator (new way to concat array in es6)
console.log(`\nThe Spread Operator (new way to concat array in es6)`);
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newWay = [...array1, "a", ...array2, `b`];

console.log(`new array:`, newWay);

const copy = [...newWay];

// Iterating an Array
console.log(`\nIterating an array`);
const values = [1, 2, 3, 4];

// one way
for (let number of values) {
  console.log(number);
}

// another way
values.forEach(function (element) {
  console.log(element);
});

// another way
values.forEach((element) => {
  console.log(element);
});

// another way
values.forEach((element, index) => {
  console.log(element, index);
});

// joining arrays
const aBunchOfNumbers = [1, 2, 3, 4];
const joined = aBunchOfNumbers.join(",");

const message = "This is my first message";

const words = message.split(" ");

console.log(`a bunch of numbers after joined:  ${joined}`);
console.log(`array of words:`, words);

const newMessage = words.join("-");
console.log(`New message ${newMessage}`);

// Sorting Arrays
console.log(`\nSorting arrays`);
const unsortedArray = [2, 3, 1];

console.log("Before sort:", unsortedArray);
unsortedArray.sort();
console.log("After sort:", unsortedArray);
unsortedArray.reverse();
console.log("After reverse:", unsortedArray);

const programmingLanguages = [
  {
    id: 1,
    name: "Kotlin",
  },
  {
    id: 2,
    name: "JavaScript",
  },
];

console.log(
  "Before sorting array of programming languages:",
  programmingLanguages
);
programmingLanguages.sort(function (a, b) {
  // a< b => -1
  // a> b =>1
  // a===b =>0

  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(
  "After sorting array of programming languages:",
  programmingLanguages
);

// Testing the Elements of an Array
console.log(`\nTesting the Elements of an Array`);
const testNumbers = [1, 2, 3, 4, -5, 5];

// all elements should be... (every)
const allPosivite = testNumbers.every(function (value) {
  return value >= 0;
});

// at least one element (some)
const atLeastOne = testNumbers.some(function (value) {
  return value >= 0;
});

console.log(allPosivite);
console.log(atLeastOne);

// Filtering an Array
console.log(`\nFiltering an Array`);
const arrayToFilter = [2, 3, -4, 5, -7, 8, 99, -122];

const filteredArrays = arrayToFilter.filter((n) => n >= 0);

console.log(filteredArrays);

// Mapping an array
console.log(`\nMapping an array`);

const mappedItems = filteredArrays.map((n) => "<li>" + n + "</li>");
console.log(mappedItems);

const html = "<ul>" + mappedItems.join("") + "</ul>";
console.log(html);

const numbersToMapAndFilter = [1, -1, 2, 3];
const items = numbersToMapAndFilter
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items);

// Reducing an Array
console.log("\nRecuding an array");

const newArrayNumbers = [1, -1, 2, 3];
let sum = 0;

for (let n of newArrayNumbers) {
  sum += n;
}
console.log(sum);

const resultSum = newArrayNumbers.reduce((accumalator, currentValue) => {
  return accumalator + currentValue;
}, 0);

// if you do not set an initial value (second argument), by default the acummulator it will start with the value from the first element in the array
const resultSum2 = newArrayNumbers.reduce(
  (accumalator, currentValue) => accumalator + currentValue
);
console.log(resultSum);
console.log(resultSum2);
