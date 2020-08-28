// 寻找两个数组的差集。找到在第一个数组array1中出现，而在第二个数组array2中没有出现的项。只考虑数组中元素为数字或字符串。
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 32, 43, 554, 76, 987];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 678, 1234];
var newArr = [];
var arrLength = arr1.length > arr2.length ? arr1.length : arr2.length;
for (var i = 0; i < arrLength; i++) {
    if (arr1[i] != undefined &&!arr2.includes(arr1[i])) {
        newArr.push(arr1[i]);
    }
    if (arr2[i] != undefined && !arr1.includes(arr2[i])) {
        newArr.push(arr2[i]);
    }
}
console.log(newArr);
// var arr1 = [1,2,3,4];
// var arr2 = [3,4];
// var arr2 = [3,4,5];
// var resultArr = [];
// for (var i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) == -1) {
//         resultArr.push(arr1[i])
//     }
// }
// console.log(resultArr);
