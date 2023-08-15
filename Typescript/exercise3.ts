/*Exercise 3: Interfaces and Objects

Create an object that adheres to the Book interface you defined earlier.
Define a function that takes a Person object (with properties name and age) and returns a greeting message.*/

import {Book} from './exercise2'

class Novel implements Book {
    title: string;
    author: string;
    year: number;
    test: number;

    constructor(title: string, author:string, year:number) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.test = this.testMethod();
      }

      testMethod = (): number => {
        return 1;
      }
}

let book = new Novel("xxx", "juanito", 1999);
console.log(book.author);
console.log(book.test);


/*---------------------------------------------------------------*/

interface Person {
    name: string;
    age:number;
    sendGreeting: (message:string) => string;
}

let student: Person = {
    name: "Diana",
    age: 4,
    sendGreeting(message:string){
        return this.name + message;
    }
}

let greeting = student.sendGreeting(" says hello");
console.log(greeting);
