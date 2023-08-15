/*Exercise 2: Type Annotations

Define a function that calculates the area of a rectangle. It should take two parameters: width and height, both of type number.
Create an interface for a Book with properties like title, author, and publication year.*/

let calcularArea: (width: number, height: number) => number = function (
    x: number,
    y: number
  ): number {
    return x * y;
  };

  let area: number = calcularArea(10, 5);

  console.log(`area rectagulo: ${area}`);


  /*-------------------------------------------------------------------*/


  export interface Book {
    title: string;
    author: string;
    year: number;
    test:number;

    testMethod: () => number;
  }