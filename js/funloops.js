<html>
<head>
    <title>FunLoops</title>
</head>
<body>
<h1>We are learning about looping</h1>
<script>
    "use strict";

    (function(){
    // 21 game
    var keepGoing = true;
    function hitMe(){
    var nextCard = Math.floor((Math.random()*11)+1);
    ourHand += nextCard;
}
    do {
    hitMe();
    alert("Your hand is now " + ourHand);
    if (ourHand > 21) {
    keepGoing = false;
    alert("You busted!");
}
    if (keepGoing) {
    keepGoing =    confirm("Do you want another card?");
}
} while(keepGoing);
    // for loop version
    // for (var ourHand = 0;ourHand <= 21;
    // 	ourHand += Math.floor((Math.random()*11)+1))
    // {
    // 	alert("Your hand is now " + ourHand);
    // 	// keepGoing =
    // 	if (confirm("Do you want another card?"))
    // 		continue;
    // 	// break;
    // 	alert("We should never see this message!!!");
    // }
    //
    // alert("Game over");
// Guess the number game
// 			var randomNumber = Math.floor((Math.random()*20)+1);
// 			var keepPlaying = true;
// do {
// 				var guess = parseInt(prompt("Please guess a number between 1 and 20"))
// 			if (guess == randomNumber) {
// 				alert("You guessed right!");
// 				keepPlaying = false;
// 			}
// 			else if (guess > randomNumber)
// 				alert("Too high!");
// 			else //guess < randomNumber
// 				alert("Too low!");
// } while (keepPlaying);
// 			console.log("Random Number was " + randomNumber);
// 			console.log("Guess was " + guess);

    var count = 0;
    while (count <10 ) {
    console.log("Count is now " + count);
    count++;
}
    console.log("Done with while loop")
    for (var count = 0; count <= 10; count+=2)	// after each iteration
{
    console.log("Count is now " + count);
}
    console.log("Done with for loop")


})();

</script>

</body>
</html>