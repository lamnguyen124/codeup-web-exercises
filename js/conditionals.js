"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var youWant = confirm("Want to enter a number?");

if (youWant === true) {
    var userNumber = Number(prompt("Give me a number!"));
    if (isNaN(userNumber) === false) {
        alert((userNumber % 2 === 0) ? "That number is even." : "That number is odd.");
        alert(userNumber + " plus 100 is " + (userNumber + 100) + ".");
        if (isNegative(userNumber)) {
            alert("That number is negative.");
        } else {
            alert("That number is positive.")
        }
    }
}

function isNegative(num) {
    return num < 0;
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(color) {
    color = color.toLowerCase();
    if (color === "red") {
        return "Strawberries are red";
    } else if (color === "blue") {
        return "blue is the color of the sky";
    } else if (color === "cyan") {
        return "I don't know anything about cyan";
    } else {
        return color + " sure is a color.";
    }
}

console.log(analyzeColor("cyan"));
console.log(analyzeColor("brown"));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch(color) {
    color = color.toLowerCase();
    var message;
    switch (color){
        case "red":
            message = "Strawberries are red";
            break;
        case ("blue"):
            message = "blue is the color of the sky";
            break;
        case ("cyan"):
            message = "I don't know anything about cyan";
            break;
        default:
            message = color + " sure is a color.";
            break;
    }
    return message;
}

console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Please enter color.");
alert(analyzeColorSwitch(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckNum, initialTotal) {
    switch (luckNum){
        case 0:
            return initialTotal;
        case 1:
            return initialTotal * .9;
        case 2:
            return initialTotal * .75;
        case 3:
            return initialTotal * .65;
        case 4:
            return initialTotal * .5;
        default:
            return 0;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));