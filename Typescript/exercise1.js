/*Exercise 1: Basic Types

Create a variable with a string value and another with a number value.
Define a function that takes two numbers as parameters and returns their sum.*/
var stringVar = "Diana Gonzalez";
var numberVar = 5;
var numberVar2 = 5;
function sumTwoValues(num1, num2) {
    return num1 + num2;
}
var total = sumTwoValues(numberVar, numberVar2);
console.log("sum: ".concat(total));
