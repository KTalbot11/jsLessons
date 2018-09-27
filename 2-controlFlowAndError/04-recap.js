/*
RECAP
*/

let stringExample = 'string';
let numberExample = 0;
let boolExample = true;

let conditionExample = 0;

//if else example
if (typeof conditionExample === 'string') {
    console.log('yep, it is a string');
} else if( typeof conditionExample === 'number') {
    console.log("yep it's a number");
} else if( typeof conditionExample === 'boolean') {
    console.log("yep, its's a boolean");
}

console.log(typeof conditionExample);

//switch
switch (typeof conditionExample) {
    case 'string':
        console.log('this is a string');
        break;
    case 'number':
        console.log('this is a number');
        break;
    case 'boolean':
        console.log('this is a boolean');
        break;
    default:
        console.log('this variable is not a string nor a number');
        break;
}

//ternary

(typeof conditionExample === 'string') ? console.log('this is a string') 
  : (typeof conditionExample === 'number') ? console.log('our variable is a number') 
  : (typeof conditionExample === 'undefined') ? console.log('our var is undefined') 
  : console.log('this is our default case');

  //challenge
  FB=15


 // solution 1

  if (FB % 3 === 0 && FB % 5 ===0) {
      console.log('Fizz Buzz');
  } else if (FB % 5 === 0){
      console.log('Buzz');
  } else if (FB % 3 === 0) {
      console.log('Fizz');
  }
  
 
  //solution 2

  switch(true){
      case (FB % 15 ===0):
      console.log('Fizz buzz')
      break;
    case( FB %5 ===0): 
      console.log('Buzz');
      break;
    case (FB %3 ===0):
      console.log('Fizz');
      break;  
    }


// solution 3

(FB % 15 === 0) ? console.log('Fizz Buzz') : (FB % 5 ===0) ? console.log('Buzz') 
: ( FB % 3 === 0) ? console.log('Fizz') : console.log('sorry, your num is neither divisible by 3 nor 5');


// random code
