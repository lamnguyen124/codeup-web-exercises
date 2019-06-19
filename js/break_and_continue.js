"use strict";
(function() {


do {
    var numberPicked = Number(prompt("Pick an odd number between 1 and 50"));
    if (numberPicked % 2 === 0)
        alert(numberPicked + " is not odd, please pick again")
    else if (numberPicked <1 || numberPicked > 50)
        alert(numberPicked + " is not between 1 and 50");
    else if (isNaN(numberPicked))
        alert(numberPicked + " is not a number");
        else{
        alert("congrats you picked the right number");
        break;
    }
} while (true)


    // ----------------------------------

    var yikes = function(skip){
        for (var i = 1; i<50;i+=2) {
            if (i === skip) {
            console.log("Yikes! Skipping number: " + i);
            continue;
        }
            console.log("Here is an odd number: "+i);
        }

    }
var userEntered = Number(prompt("Enter a number"));
    yikes(userEntered);












})();
