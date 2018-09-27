//ternaries

var x = 6;

(x > 0) ? console.log("x is greater than 0.") : console.log("x is not greater than 0");

if (x > 0) {
    console.log("greater");
} else {
    console.log("lesser");
}


let x = 10

(x == 0) ? console.log("x equals 0") : (x < 0) ? console.log("x is less than 0") :console.log("x is greater than 0"); 
//unlike switches, turnaries require a default in order to work.

let age = 20;

(age >= 25) ? console.log("you can rent a car!") : (age >= 21) ? console.log("you can drink!") 
: (age >= 18) ? console.log("you can vote!") : console.log("you're too young kiddo.");

let yep = -8;

(yep < 0 && yep > -10) ? console.log("yep is between 0 and -10") : (yep > 0) ? console.log("yep is greater than 0")
: console.log("yep is greater than 0");


let y = 5;

(y == 2) ? console.log("y is equal to two") : console.log("default");