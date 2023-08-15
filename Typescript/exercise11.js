/*Exercise 11: Poo

Online Store:Build a basic online store with classes like Product, Cart, and Order. Implement methods to add products to the cart, place orders, and calculate the total cost.
Geometry Calculator:Create a class for calculating geometric properties like area and perimeter. Implement methods for various shapes like circles, rectangles, triangles, etc.
Library Catalog:Develop classes for books and authors. Create a library catalog that allows adding books, searching by author or title, and displaying information about available books.*/
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart(id, numItems, products) {
        this.id = id;
        this.numItems = numItems;
        this.products = products;
    }
    Cart.prototype.addProduct = function (prod) {
        this.products.push(prod);
    };
    Cart.prototype.getProducts = function () {
        return this.products;
    };
    return Cart;
}());
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.calculateTotal = function (cart) {
        var products = cart.getProducts();
        var mapped = products.map(function (elem) { return elem.getPrice; });
        var total = products.reduce(function (accumulator, currentValue) { return accumulator + currentValue.getPrice(); }, 0);
        console.log(total);
    };
    return Order;
}());
var product = new Product("1", "vaso", 10);
var product2 = new Product("2", "plato", 15);
var products = [];
var cart = new Cart("1", 2, products);
cart.addProduct(product);
cart.addProduct(product2);
var order = new Order();
order.calculateTotal(cart);
var Square = /** @class */ (function () {
    function Square(x, y) {
        var _this = this;
        this.calculateArea = function () {
            return _this.x * _this.y;
        };
        this.calculatePerimeter = function () {
            return _this.x * _this.y;
        };
        this.x = x;
        this.y = y;
    }
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle(radio) {
        var _this = this;
        this.calculateArea = function () {
            return 3.14 * _this.radio * _this.radio;
        };
        this.calculatePerimeter = function () {
            return 2 * 3.14 * _this.radio;
        };
        this.radio = radio;
    }
    return Circle;
}());
var circulo = new Circle(2);
var areac = circulo.calculateArea();
var perc = circulo.calculatePerimeter();
console.log(areac);
console.log(perc);
var cuadrado = new Square(2, 2);
var areacu = cuadrado.calculateArea();
var percu = cuadrado.calculatePerimeter();
console.log(areacu);
console.log(percu);
