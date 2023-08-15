/*Exercise 11: Poo

Online Store:Build a basic online store with classes like Product, Cart, and Order. Implement methods to add products to the cart, place orders, and calculate the total cost.
Geometry Calculator:Create a class for calculating geometric properties like area and perimeter. Implement methods for various shapes like circles, rectangles, triangles, etc.
Library Catalog:Develop classes for books and authors. Create a library catalog that allows adding books, searching by author or title, and displaying information about available books.*/

class Product{
    private id: string;
    private name: string;
    private price: number;


    constructor(id: string, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getPrice(): number{
        return this.price;
    }
}

class Cart{
    private id: string;
    private numItems: number;
    private products: Product[];

    constructor(id: string,numItems: number, products: Product[] ){
        this.id = id;
        this.numItems = numItems;
        this.products = products;
    }

    public addProduct(prod: Product){
        this.products.push(prod);
    }

    public getProducts(): Product[]{
        return this.products;
    }


}


class Order{
    private id: string;
    private total: number;
    private cartId: string;

    public calculateTotal(cart: Cart): void{
        let products = cart.getProducts();

        const mapped = products.map((elem)=> elem.getPrice);

        let total = products.reduce((accumulator, currentValue) => accumulator + currentValue.getPrice(), 0);
        console.log(total);
    }
}


let product = new Product("1", "vaso", 10);
let product2 = new Product("2", "plato", 15);
let products = []; 

let cart = new Cart("1",2,products);

cart.addProduct(product);
cart.addProduct(product2);

let order = new Order();
order.calculateTotal(cart);



/*---------------------------------------------------------------------*/

interface GeometryCalculator {
    calculateArea(): number;
    calculatePerimeter():number;
}

class Square implements GeometryCalculator{
    x: number;
    y:number;

    constructor(x: number, y:number){
        this.x = x;
        this.y = y;
    }

    calculateArea = (): number => {
        return this.x * this.y ;
    }

    calculatePerimeter = (): number  => {
        return this.x * this.y ;
    }
}

class Circle implements GeometryCalculator{
    radio: number;

    constructor(radio: number){
        this.radio = radio;
    }

    calculateArea = (): number => {
        return 3.14 * this.radio * this.radio ;
    }

    calculatePerimeter = (): number  => {
        return 2 * 3.14 * this.radio ;
    }
}

let circulo = new Circle(2);
let areac = circulo.calculateArea();
let perc = circulo.calculatePerimeter();
console.log(areac);
console.log(perc);


let cuadrado = new Square(2, 2);
let areacu = cuadrado.calculateArea();
let percu = cuadrado.calculatePerimeter();
console.log(areacu);
console.log(percu);