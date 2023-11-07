

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for (let i = 1; i <= count; i++){
        if (i % 2 != 0){
         console.log(i);
    }
 }
}
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16){
        console. log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}
checkAge("Cory", 48);
checkAge("Kaeley", 13);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
function quadrant(x, y) {
    switch (true){
        case x > 0 && y > 0:
            return "Quadrant 1";
        case x < 0 && y > 0:
            return "Quadrant 2";
        case x < 0 && y < 0:
            return "Quadrant 3";
        case x > 0 && y < 0:
            return "Quadrant 4";
        case x == 0 && y != 0:
            return "X Axis";
        case x != 0 && y == 0:
            return "Y Axis";
        default:
            return "Origin"; // 0,0
    }
}
console.log(quadrant(0, 0));
console.log(quadrant(0, 1));
console.log(quadrant(2, 3));
console.log(quadrant(-4, 0));
console.log(quadrant(-4, -1));
console.log(quadrant(4, -2));
console.log(quadrant(3, 0));