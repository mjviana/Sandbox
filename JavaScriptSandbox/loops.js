// for
console.log(`for loop`);
for (let index = 0; index < 5; index++) {
    console.log(`Hello World ${index}`);
}


// while
console.log(`\nwhile loop`);
let j = 0;
while (j < 5) {
    console.log(`Hello World ${j}`);
    j++;
}

//do-while
console.log(`\ndo-while loop`);
let z = 0;
do {
    console.log(`Hello world ${z}`);
    z++;
} while (z < 5);

// infinte

// let y = 0;
// while (true) {
//     console.log(`(infinite) Hello world ${z} \n`);
//     z++;
// }

// for..in -> for propeties of an object
console.log(`\nfor..in loop`);
const person = {
    name: 'Mário',
    age: 28
};

for (const key in person) {
    console.log(`${key}, ${person[key]}`);
}


//for..of -> for collections
console.log(`\nfor..of loop`);
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(`Color #${colors.indexOf(color)}: ${color}`);
}

//#region break and continue
let n = 0;
while (n < 10) {
    // if (n === 5)
    //     break;

    if (n % 2 === 0) {
        n++;
        continue;
    }

    console.log(n);
    n++;
}
//#endregion