// 请扁平化数组，比如[1,2,[3,4,[5,6]]]扁平化后将得到[1,2,3,4,5,6]
function deepClone(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...deepClone(arr[i]));
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}
var arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
var a = deepClone(arr);
console.log(a);







