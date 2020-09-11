//more on classes in typescript
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Fun disp " + this.engine);
    };
    return Car;
}());
var fs = new Car("Petrol");
fs.disp();
