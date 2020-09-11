//fun with Scope in TypeScipt
var global_num = 12;
//there is no concept of classes in javascript
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 09;
        console.log("Store num function");
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global Variable " + global_num);
console.log("Static variable " + Numbers.sval);
//creating object of class
var obj = new Numbers();
console.log("Instance variable " + obj.num_val);
console.log(obj.storeNum());
