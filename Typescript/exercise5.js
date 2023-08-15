/*Exercise 5: Function Overloads

Create a function that accepts either a number or a string and returns their length.
Define function overloads for the above function to handle both number and string inputs separately.*/
function returnLenght(variable) {
    var res;
    if (typeof variable === 'string' || typeof variable === 'number') {
        res = variable.toString().length;
    }
    else {
        res = -1;
    }
    return res;
}
var result = returnLenght(123);
console.log(result);
var result2 = returnLenght("12345");
console.log(result2);
