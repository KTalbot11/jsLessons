/*
INTRO TO ARRAYS

can have multiple data types. data seperated by a comma. uses '[]' brackets.
arrays are great for listing
*/

//overview/calling

let students = ['Tony',"Marshal",'Reese','Ray', 23 ,true,['Ryan','Iesha']];
//index Num       0        1        2      3    4     5     6       7
console.log(typeof students); //object
console.log(students[3]) //Ray

//challenge

console.log(`hello ${students[6][1]} you look nice today`); // grabs Iesha
console.log('Hello ' + students[6][1] + ' you look nice today.') // alternative answer

console.log(students[6][1][4])//grabs letter a

//can grab into pieces of an array that are in an array

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for( let f of food){
    console.log(f);
}

for(let i = 0; i < food.length; i++){
    console.log(food[i]);
}

food.push('Pizza'); //appends pizza to the end of array
console.log(food);
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
food.splice(1,1,'Bananas') //first num: the index to start at. second num: number of things to remove: third thing: replacement value.
console.log (food);

food.pop(); //removes the last value from array

