"use strict";
/*
Create a module that exports functions for basic math operations like addition, subtraction, multiplication, and division. Import and use these functions in another file to perform calculations.

Build a module that fetches weather data from a weather API. Export functions to get current weather conditions and forecasts. Import these functions and display weather information in a console application.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtraction = exports.addition = void 0;
var addition = function (x, y) {
    return x + y;
};
exports.addition = addition;
var subtraction = function (x, y) {
    return x - y;
};
exports.subtraction = subtraction;
