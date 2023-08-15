"use strict";
/*Exercise 3: Interfaces and Objects

Create an object that adheres to the Book interface you defined earlier.
Define a function that takes a Person object (with properties name and age) and returns a greeting message.*/
Object.defineProperty(exports, "__esModule", { value: true });
var Novel = /** @class */ (function () {
    function Novel(title, author, year) {
        this.testMethod = function () {
            return 1;
        };
        this.title = title;
        this.author = author;
        this.year = year;
        this.test = this.testMethod();
    }
    return Novel;
}());
var book = new Novel("xxx", "juanito", 1999);
console.log(book.author);
console.log(book.test);
var student = {
    name: "Diana",
    age: 4,
    sendGreeting: function (message) {
        return this.name + message;
    }
};
var greeting = student.sendGreeting(" says hello");
console.log(greeting);
