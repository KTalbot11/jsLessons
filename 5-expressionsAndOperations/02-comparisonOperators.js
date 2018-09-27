/*
Comparison  Operators
*/

//equallity
console.log('3' == 3); //type coercion
console.log('three' == 3);  //false

//strict equality -> checks value and type
console.log(3 === 3);
console.log(3 === '3');
console.log(0 == false);

//not equal
console.log ('4' != 4); //doesnt care about tyor, output,->

//strict not equal
console.log('3' !== 3);//checks type and value

//greater than
console.log(3>2);

//less than
console.log(2<3);

//greater than or equal to
console.log(3 >= 3);

//less than or eqaul to
console.log(4 <= 4);

//And: returns true if the left and right are both true
console.log(true && true);//output: true
let x = 5;
console.log(x < 10 && x> -5); //true
console.log(x < 10 && x > 15); //false

//tangent
let str = 'a';
console.log(str < 'p');

//Or: return true if the left OR right are true
console.log(true || false); //true
let x = 5;
console.log(x < 10 || x > 15); //true

