"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exercise10_1 = require("./exercise10");
console.log((0, exercise10_1.addition)(1, 2));
console.log((0, exercise10_1.subtraction)(1, 2));
/*----------------------------weather API-----------------------------*/
var url = 'https://api.open-meteo.com/v1/forecast?latitude=4.6097&longitude=-74.0817&hourly=temperature_2m';
fetch(url).then(function (response) { return response.json(); }).then(function (data) { return console.log(data); });
