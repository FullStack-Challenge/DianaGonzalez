/*Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.*/

const arr = [5,1,2,3,4]

const mapped = arr.map((el)=>el)
console.log(mapped);

const suma = mapped.reduce((acc,el)=>
    acc+el, 0
)

let average1 = suma/mapped.length
console.log(`average: ${average1}`)


/*
let sum =0
for (i=0; i < arr.length; i++){
    sum += arr[i]
}
let average = sum/arr.length */
