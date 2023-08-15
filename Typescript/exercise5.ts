/*Exercise 5: Function Overloads

Create a function that accepts either a number or a string and returns their length.
Define function overloads for the above function to handle both number and string inputs separately.*/


/* Part 1

function returnLenght(variable: number|string): number{
    return variable.toString().length;
}*/

/*--------------------------------------------------------------*/


function returnLenght(var1: number): number;

function returnLenght(var2: string): number;

function returnLenght(variable: unknown): number{
    let res: number;
    if (typeof variable === 'string' || typeof variable === 'number') {
        res = variable.toString().length;
    }else{
        res =  -1;
    }
    return res;
}

let result = returnLenght(123);
console.log(result);

let result2 = returnLenght("12345");
console.log(result2);


