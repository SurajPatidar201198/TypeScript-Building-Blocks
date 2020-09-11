//fun with arrays in typesript
//let us create a empty array
var alphas;
alphas = ["Red", "Blue", "Orange"];
//lets access array elements
console.log(alphas[0]);
console.log(alphas[1]);
//lets create an integer array
var nums = [1, 2, 4, 5];
console.log(nums[0]);
console.log(nums[1]);
//lets try some complex arrays
var arr_names = new Array(4); //array of length 4
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
}
console.log(arr_names);
//lets try some another string array
var names = new Array("Marray", "Tom", "Jack");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
for (var x in names) {
    console.log('-->' + names[x]);
}
