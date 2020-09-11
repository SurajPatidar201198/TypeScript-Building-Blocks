//advance array operations
//let us create an array
var arr = new Array("First", "Second", "Third");
var str = arr.join();
console.log(" str : " + str);
var str = arr.join("-");
console.log(" str : " + str);
var str = arr.join("@");
console.log(" str : " + str);
var str = arr.join("");
console.log(" str : " + str);
//lets try some poppy pop
var number = [1, 3, 5];
var element = number.pop();
console.log('element is ' + element);
console.log(number);
//lets have some more fun with arrays
var numbers = new Array(1, 4, 6);
var findMe = numbers.push(10); //findMe will store length of array after insertion
console.log("find me " + findMe);
console.log(numbers);
//aggregation, finding the sum of given array
//for that we will use buildin function called reduce.
var sum = [10, 20, 30].reduce(function (a, b) { return a + b; });
console.log(sum);
//shift function removes and returns the first element
var arr1 = [10, 20, 30, 40];
var elements = arr1.shift();
console.log("element ->", elements);
console.log("array -> ", arr1);
//some is beautiful...
var ageGroup = [7, 18, 21, 14, 17, 22, 19];
//find the people with valid voting age
// function votingAgeValidator(element,index,array){
//     return (element>=18);
// }
// var votersGroup = ageGroup.some(votingAgeValidator);
// console.log("Age group valid for voting is --> "+votersGroup)
var ageGroup = [2, 1, 3, 3, 2, 0];
ageGroup.sort();
console.log(ageGroup);
