"use strict";
/*Exercise 2: Type Annotations

Define a function that calculates the area of a rectangle. It should take two parameters: width and height, both of type number.
Create an interface for a Book with properties like title, author, and publication year.*/
Object.defineProperty(exports, "__esModule", { value: true });
var calcularArea = function (x, y) {
    return x * y;
};
var area = calcularArea(10, 5);
console.log("area rectagulo: ".concat(area));
