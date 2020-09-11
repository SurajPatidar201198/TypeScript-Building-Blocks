//Fun with inheritance

class Shape
{
    Area:number;
    constructor(a:number)
    {
        this.Area=a;
    }
}
class Circle extends Shape
{
    display()
    {
        console.log("Area of the circle "+this.Area);
    }
}

var wheel = new Circle(567);
console.log(wheel.display());