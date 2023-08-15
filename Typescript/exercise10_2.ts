import {addition, subtraction} from './exercise10';

console.log(addition(1,2))
console.log(subtraction(1,2))


/*----------------------------weather API-----------------------------*/

const url = 'https://api.open-meteo.com/v1/forecast?latitude=4.6097&longitude=-74.0817&hourly=temperature_2m';
fetch(url).then((response)=> response.json()).then(data=> console.log(data));

