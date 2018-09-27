/*
IF ELSE
*/

weather  = 75;

if (weather < 70){
    console.log('wear a jacket!');
} else {
    console.log('No jacket necessary');
}

//challenge 1

name = 'Keagan Talbot'
if (name == 'Keagan Talbot') {
    console.log('Hello, my name is ' + name);
} else{
    console.log('Hello, what is your name?')
}

//

 // challenge 2

function name(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(name('dAvY'));

//if else solution

let name = 'tYlEr';

if (name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}

/*
ELSE IF 
*/

/*
challenge
*/

age = 19;

if (age >= 25) {
    console.log('You can rent a car!');
} else if (age >=21) {
    console.log('You can drink!');
} else if (age >=18) {
    console.log('You can vote!');
} else {
    console.log("Sorry kid, you're too young");
}
