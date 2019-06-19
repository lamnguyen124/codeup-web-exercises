"use strict";
(function() {

    var i = 2;
     while (i < 65536) {
        i = i * 2;
        console.log(i);
     }

    //-----------------

    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Starting the day with " + allCones + " cones.")
    do {
        var conesWanted = Math.floor(Math.random() * 5) + 1;
        if (conesWanted <= allCones) {
            allCones -= conesWanted;
            console.log(conesWanted + " cones sold...");
        } else {
            console.log("Cannot sell you " + conesWanted + " cones. I only have " + allCones + "...")
        }
    } while (allCones > 0);

    console.log("Yay! I sold them all");

    //-----------------




























})();
