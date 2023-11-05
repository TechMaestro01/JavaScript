// Question no 1
// Calculations through variables
var num1 = 3 ;
num1 = num1 + 5 ;
console.log (num1)

var num2 = 3 ;
num2 = num2 * 5 ;
console.log (num2)

var num3 = 3 ;
num3 = num3 / 5 ;
console.log (num3)

var num4 = 3 ;
num4 = num4 - 5 ;
console.log (num4)

var num5 = 3 ;
num5 = num5 % 5 ;
console.log (num5)

// Question no 2
// If user write nothing in prompt box write "SMIT" by default
var str = "Hello"
var userName = prompt("Enter your name", "SMIT")
console.log(str + " " + userName)

// Question no 3
// Conrenation through prompt
var num1 = prompt("Enter num 1")
var num2 = prompt("Enter num 2")
console.log(num1 + num2)

// Question no 4
// Making string value a number by adding + sign
var num1 = +prompt("Enter num 1")
var num2 = +prompt("Enter num 2")
console.log(num1 + num2)

// Question no 5
// if statements
// as if is a keyword to find true or false values and it's syntax is if(){}
// curly brackets in this are called blocks
// Comparison operators
// // If we use 2 == sign then it will only match value of numbers not type and if we use 3 === it will read same data and same type
// "1" === "1" 
// // answer is true
// "1" === 1
// // answer is false
// "1" == "1"
// // answer is true
// "1" = 1
// // answer is true

// Question no 6
// is equal to operator
var age = +prompt("Enter your age")
if ( age === 18) {
console.log("Eligible")
}
else{
    console.log("Not Eligible")
}

// is not equal to operator
var roll = +prompt("Enter your roll number")
if ( roll !== 7966) {
console.log("Eligible")
}else{
    console.log("Not Eligible")
}

// is greater than operator
var age = +prompt("Enter your age")
if (age >= 18){
    console.log("Eligible")
}else{
        console.log("Not Eligible")
    }