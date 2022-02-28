//Exercise 1- Max of Two Numbers 

console.log(`Exercise #1: ${maxOfTwoNumbers(1, 2)} \n`);

function maxOfTwoNumbers(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

//Exercise 2- Landscape or Portrait

console.log(`Exervise #2: ${isLandscape(252, 300)} \n`);

function isLandscape(width, height) {
    return (width > height);
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
    if (typeof (input) !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz'

    else if (input % 3 === 0) {
        return 'fizz';
    }
    else if (input % 5 === 0) {
        return 'fuzz'
    }
    else
        return input
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

    if (speed < speedLimit + kmPerPoint)
        return `Ok`;

    let points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points >= 12)
        return `Points:  ${points} License suspended!`;

    return `Points:  ${points}`;
}

