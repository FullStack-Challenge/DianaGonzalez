/*Exercise 1: Basic Types

Create a variable with a string value and another with a number value.
Define a function that takes two numbers as parameters and returns their sum.*/

let stringVar:string = "Diana Gonzalez"; 
let numberVar:number = 5; 
let numberVar2:number = 5; 

function sumTwoValues(num1, num2){
    return num1 + num2;
}

let totalsum: number = sumTwoValues(numberVar, numberVar2);
console.log(`sum: ${totalsum}`);

// tsc exercise1.ts  
// node exercise1.js