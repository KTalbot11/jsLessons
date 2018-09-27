/*
CLASSSIC FOR LOOPS
*/

//loop variations
//for statement
//do while statement
//while statement
//labeled statements
//break statement
//continue statement
//for in statement
//for out statement


//counted from 0 - 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//count from 0 - 20, by 2's
for (let i = 0; i <= 20; i = i + 2){
    console.log(i);
}

//challenge:1 using a for loop, count down from 10 to 0 by 1's
for (i = 10; i>= 0; i = i-1){
    console.log(i);
}

//challenge: 3
let name = 'Kenn';
// k: 0, e: 1, n:2, n:3 

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//challenge: 4 make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let sum = 0;

for( let i=1;i <= 50; i ++) {
    sum = sum + i
    console.log(sum)
}


