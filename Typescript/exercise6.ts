/*Exercise 6: Arrays and Generics

Create an array of numbers and calculate their sum using the reduce method.
Write a function that takes an array and a value, and returns the index of the value in the array or -1 if not found.*/

let numbers: number[] = [1, 2, 3];

let total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);


/*-----------------------------------------------------------*/

let numbers2: (number|string)[] = [1, 2, 3, 4,"123"];

function giveMeIndex(array:(number|string)[], elem: number|string ): number{
    const found = numbers2.indexOf(elem);
    return found;
}

let indice = giveMeIndex(numbers2, "123");

console.log(`el indice es: ${indice}`);

/*--------------------using generics-------------------------------------------*/

let numbers3: (number|string)[] = [1, 2, 3, 4,"123"];
function indexgenerics<T>(arg: T[], elem: number|string): number {
    const found = numbers2.indexOf(elem);
    return found;
}

let indice2 = indexgenerics(numbers3, "123");
console.log(`el indice es: ${indice2}`);


