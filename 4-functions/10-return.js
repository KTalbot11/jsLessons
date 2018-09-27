//RETURNS

function fullname(firstName, lastName){
    return firstName + ' '+ lastName;
}

var fullName = fullname("Alecx", "Moritz");
console.log(fullName);

function addNums(firstNum, secondNum) {
    return firstNum + secondNum; 
}

console.log(addNums(2,3));

function tipCalc(price,percentTip){
    
    return price * percentTip/100;
}

let Tip = tipCalc();
console.log(tipCalc(50,20));

