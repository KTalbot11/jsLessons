/*
FOR IN LOOPS

Great for interating over values in an object
*/

let student = {name: 'Christian' , awesome: true, degree: 'JavaScript', week: 1};

//console.log(student.name); (example of value of key)

for(let item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmser', 'maine coon'];
//the cat right after 'for' at the start of the loop is jus a fillar word and doesnt matter
// what the word actually is
for( cat in catArray){
    console.log(catArray[cat]);
}

//challenge

let name = 'danny';
let capName ='';

for(let ch in name){
 
   if(ch == 0) {
       capName = name[ch].toUpperCase();
   } else {
       capName = capName+name[ch].toLowerCase();
   }
   console.log(capName)
}   
   console.log(capName);
