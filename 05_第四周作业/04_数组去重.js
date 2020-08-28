var arr = [1, 1, 2, 3, 3, 3];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);