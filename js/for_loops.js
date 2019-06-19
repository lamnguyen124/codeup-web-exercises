"use strict";
(function() {



    var showMultiplicationTable = function(num){
        for (var i=1;i<=10;i++) {
            console.log(num + " x "+i+" = "+(i*parseInt(num)));
        }
}
 showMultiplicationTable(6);
// ----------------------
    var randomEvenOdds = function() {
        for (var j = 0; j < 11; j++) {
            var randomNum = Math.floor(Math.random() * 180) + 20;
            var remainderNum = randomNum % 2;
            // switch (remainderNum) {
            //     case 0:console.log(randomNum + " is even");
            //     break;
            //     default:console.log(randomNum + " is odd");
            // }
            if (remainderNum === 0) {
                console.log(randomNum + "is even");
            } else {
                console.log(randomNum + "is odd");
            }
        }
        randomEvenOdds();
// ----------------------
        var christmasTree = function () {
            for (var outer = 1; outer <= 9; outer++) {
                var output = '';
                for (var inner = 1; inner <= outer; inner++) {
                    output += outer;
                }
                console.log(output)
            }

        }

        christmasTree();
        // ----------------------
        for (var q = 100; q >= 5; q -= 5) {
            console.log(q);
        }
    }

































})();