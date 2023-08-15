/*Write a JavaScript program to calculate how many numbers in the given array are less than or equal to the given value. This is done using the percentile formula.*/

const arr = [1,2,3,4,5,6]
let val = 4
const percentil = (arr, val) => {
    const r = arr.filter(el => el<=val)
    return r.length/arr.length * 100
}

console.log(percentil(arr, val));