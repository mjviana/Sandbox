// Object-oriented programming (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

circle.draw(); // Method


// Factory Functions
function createCircle(radius, location, isVisible) {
    return {
        radius,
        location,
        draw() {
            console.log('draw')
        },
        isVisible
    };
}

const location1 = {
    x: 1,
    y: 1
}
const location2 = {
    x: 2,
    y: 2
}

const circle1 = createCircle(1, location1, true);
console.log(`\ncircle #1: \n`, circle1);
circle1.draw();

const circle2 = createCircle(2, location2, false);
console.log(`\ncircle #2: \n`, circle2);
circle2.draw();