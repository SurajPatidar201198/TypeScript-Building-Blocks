var Points = /** @class */ (function () {
    // public x : number;
    // public y : number;
    //marking variable with ? will make the parameter optional
    //if we mark a variable as public then we don't need to declare variable at class level
    function Points(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Points.prototype.draw = function () {
        console.log("X : " + this.x + " Y : " + this.y);
    };
    //getters and setters
    Points.prototype.getX = function () {
        return this.x;
    };
    Points.prototype.getY = function () {
        return this.y;
    };
    Points.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0");
        }
        this.x = value;
    };
    Points.prototype.setY = function (value) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0");
        }
        this.y = value;
    };
    return Points;
}());
//lets create some objects
var point = new Points(1, 2);
var point1 = new Points(3);
point1.setX(20);
console.log(point1.getX());
