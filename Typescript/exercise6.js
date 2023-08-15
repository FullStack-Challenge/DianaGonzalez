/*Exercise 6: Arrays and Generics

Create an array of numbers and calculate their sum using the reduce method.
Write a function that takes an array and a value, and returns the index of the value in the array or -1 if not found.*/
var numbers = [1, 2, 3];
var total = numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
console.log(total);
/*-----------------------------------------------------------*/
var numbers2 = [1, 2, 3, 4, "123"];
function giveMeIndex(array, elem) {
    var found = numbers2.indexOf(elem);
    return found;
}
var indice = giveMeIndex(numbers2, "123");
console.log("el indice es: ".concat(indice));
/*--------------------using generics-------------------------------------------*/
var numbers3 = [1, 2, 3, 4, "123"];
function indexgenerics(arg, elem) {
    var found = numbers2.indexOf(elem);
    return found;
}
var indice2 = indexgenerics(numbers3, "123");
console.log("el indice es: ".concat(indice2));
