var arr = [1, 2, 3, 4, 1, 23, 4, 5, 6, 7, 6, 5, 90];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);