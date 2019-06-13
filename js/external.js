"use strict";
console.log("Hello from inline JavaScript");
alert("welcome to my website");
var userInput = prompt("What's your favorite color?");
alert("Great, "+ userInput + " is my favorite color too!");

var mermaid = Number(prompt("How many days did you rent The Little Mermaid for?"));
var bear = Number(prompt("How many days did you rent Brother Bear for?"));
var hercules = Number(prompt("How many days did you rent Hercules for?"));
var totalDays = mermaid + bear + hercules;
var dayCost = Number(prompt( "How much does it cost a day for a movie?"));
var total =  dayCost * totalDays;
alert("So the total you owe is "+ total);

var google = prompt("How much does Google pay you an hour?");
var amazon = prompt("How much does Amazon pay you an hour?");
var facebook = prompt("How much does Facebook pay you an hour?");
var googleHour  = prompt( "How many hours did you work for Google?");
var amazonHour = prompt( "How many hours did you work for Amazon?");
var facebookHour = prompt( "How many hours did you work for Facebook?");
// var payment = (google * googleHour) + (facebook * facebookHour) + (amazon * amazonHour) + (facebook * facebookHour);
var facebookTotal = facebook * facebookHour;
var amazonTotal = amazon * amazonHour;
var googleTotal = google * googleHour;
var payment = facebookTotal + amazonTotal + googleTotal;
alert("So the total that you're getting paid is "+ payment);

var full= confirm("Is there space available in class?");
var schedule= confirm("Is the schedule not conflicting?");
var possible= full && schedule;
alert("Student can enroll: " + possible);

var member = confirm( "are you a premium member?");
var buyMuch = confirm( "Did you buy more than 2 items?");
var when = confirm( "is the offer expired?");
var yesOrNo= buyMuch && when || member;
alert("Customer can use coupon: " + yesOrNo);


