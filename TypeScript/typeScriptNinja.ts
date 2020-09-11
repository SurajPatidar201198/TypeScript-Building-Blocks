//variable in Typescript
var msg = "Welcome to TypeScript ! Ninjas"

//printing message
console.log(msg)

//Creating function in TypeScript

function log(msg)
{
    console.log(msg);
}

log("This is logged by a function")



function doSomething()
{
    var num=100;
    let mynumber=21;        //let is a scope based variable
    console.log(mynumber)
}
// console.log(num);
// console.log(num);

//Fun with DataTypes | observe the variables declarations

let a1 : number;
let b: boolean;
let c: string;
let d: any;
let e: any[]=[1,2,3,4,5]
let f: any[]=[1,'abc',true,12.3,false]
console.log(f[2])
console.log(d);

// a1="hello";     //compile time checking is available in typescript its one of its biggest advantage over javascript

//fun with constants
const colorRed = 0
const colorGreen = 1
const colorBlue = 2

enum colors {red=9,green=6,blue}

let backgroundColor = colors.blue
console.log(backgroundColor)


//function references in TypeScript

let log1 = function(message){
    console.log(message);
}

log1("Suraj is a good boy")

//ninja techniques of simplifying | making function more happy
//by using ARROW FUNCTION

let dolog = (message)=>console.log(message);

dolog("This is logged by >>>>>> arrow function")



