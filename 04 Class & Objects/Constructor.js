var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    } //3. the data will come here. when we call the class constructor will execute first.
    return BottleMaker;
}()); //1. created class
var b1 = new BottleMaker("Milton", 1200); //2. when we call this will go to the constructor
var b2 = new BottleMaker("Cello", 3200); //2. when we call this will go to the constructor
