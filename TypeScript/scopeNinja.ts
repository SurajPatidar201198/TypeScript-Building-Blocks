//fun with Scope in TypeScipt

var global_num = 12

//there is no concept of classes in javascript
class Numbers {
    num_val = 13;
    static sval = 10;
    storeNum():void{
        let local_num=09;
        console.log("Store num function")
    }
}

console.log("Global Variable "+global_num)
console.log("Static variable "+Numbers.sval);

//creating object of class
var obj = new Numbers();
console.log("Instance variable "+obj.num_val);

console.log(obj.storeNum());