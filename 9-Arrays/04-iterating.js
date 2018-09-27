//Iterating
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

//food.forEach(f => {console.log(f)});
food.forEach((food,number) => {
console.log(food);
console.log(number);
})

//challenge

let movies = ['Pirates of the Carribean: Curse of the Black Pearl','Land of the Lost','E.T.','The Waterboy'];

movies.forEach(m => {console.log(m)});
movies.push('Monty Python and the Holy Grail');
console.log(movies);
movies.splice(2,1,"Tag");
console.log(movies);

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
    console.log (el);
})
console.log(newArray);