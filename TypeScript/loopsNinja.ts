//fun with loops in Typescript

var num : number = 5;
var i : number;
var factorial = 1;
for(i=num;i>=1;i--){
    factorial*=i;
}

console.log("Factorial of "+num+" is "+factorial)

//lets practice whileloop

var num1 : number=5
var factorial1:number =1;
while(num1>=1)
{
    factorial1*=num1;
    num1-=1;
}
console.log("while loop factorial "+factorial1)