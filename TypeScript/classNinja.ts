//more on classes in typescript
class Car
{
    engine:string;
    constructor(engine:string)
    {
        this.engine=engine;
    }
    disp():void{
        console.log("Fun disp "+this.engine);
    }
}
var fs = new Car("Petrol")
fs.disp();