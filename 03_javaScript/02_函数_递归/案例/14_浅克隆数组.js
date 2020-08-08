var arr1 = [1, 2, 3, 4, 5];
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
}
console.log(arr2);
console.log(arr1 == arr2) //false