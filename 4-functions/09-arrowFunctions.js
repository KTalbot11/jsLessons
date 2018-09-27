//ARROW FUNCTIONS

function coffee() {
    console.log("coffee rules.")
}

let tea = () => {
   console.log("tea is awesome"); //code here
}

coffee();
tea();

var cats = (kitten, puppy) => {
    console.log(`I have a ${kitten} cats, and ${puppy} dogs.`);
}

cats(2,3);
//arrow functions cannot be hoisted.

//arrow function body styles
//concice
let apples = x => console.log(`there are ${x} apples`)
apples(5);

//block
let peaches = (x) => {
    console.log(`there are ${x} peaches`)
    console.log('this works');
}
peaches(6);

