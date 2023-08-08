/*Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.*/

const arr = [5,1,2,3,4]
let sum =0
for (i=0; i < arr.length; i++){
    sum += arr[i]
}
let average = sum/arr.length
console.log(arr);
console.log(`average: ${average}`)