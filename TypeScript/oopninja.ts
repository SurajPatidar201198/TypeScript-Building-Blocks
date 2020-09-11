class Points
{
    // public x : number;
    // public y : number;

    //marking variable with ? will make the parameter optional
    //if we mark a variable as public then we don't need to declare variable at class level
    constructor(public x?:number,public y?:number){
        this.x=x;
        this.y=y;
    }

    public draw()
    {
        console.log("X : "+this.x+" Y : "+this.y);
    }

    //getters and setters

    getX(){
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    setX(value)
    {
        if(value<0)
        {
            throw new Error("Value cannot be less than 0");
        }
        this.x=value;
    }
    setY(value)
    {
        if(value<0)
        {
            throw new Error("Value cannot be less than 0");
        }
        this.y = value;
    }

}

//lets create some objects

let point = new Points(1,2);
let point1= new Points(3);

point1.setX(20);
console.log(point1.getX());


