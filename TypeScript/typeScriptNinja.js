//variable in Typescript
var msg = "Welcome to TypeScript ! Ninjas";
//printing message
console.log(msg);
//Creating function in TypeScript
function log(msg) {
    console.log(msg);
}
log("This is logged by a function");
function doSomething() {
    var num = 100;
    var mynumber = 21; //let is a scope based variable
    console.log(mynumber);
}
// console.log(num);
// console.log(num);
//Fun with DataTypes | observe the variables declarations
var a1;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, 'abc', true, 12.3, false];
console.log(f[2]);
console.log(d);
// a1="hello";     //compile time checking is available in typescript its one of its biggest advantage over javascript
//fun with constants
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var colors;
(function (colors) {
    colors[colors["red"] = 9] = "red";
    colors[colors["green"] = 6] = "green";
    colors[colors["blue"] = 7] = "blue";
})(colors || (colors = {}));
var backgroundColor = colors.blue;
console.log(backgroundColor);
//function references in TypeScript
var log1 = function (message) {
    console.log(message);
};
log1("Suraj is a good boy");
//ninja techniques of simplifying | making function more happy
//by using ARROW FUNCTION
var dolog = function (message) { return console.log(message); };
dolog("This is logged by >>>>>> arrow function");
