/*
PARAMATERS

paramaters are like empty storage boxes that we can name whatever
*/

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`)
}

pet('doggo');

//challenge: write a function that takes two paramaters:
//one paramater is for a first name, the other for a last name
//have them come together in a variable inside the function
//ex: console.log 'hello, my name is Tyler Shelton'

function name(firstName, lastName) {
    console.log(`Hello my name is ${firstName} ${lastName}.`);
}

name('Keagan','Talbot');