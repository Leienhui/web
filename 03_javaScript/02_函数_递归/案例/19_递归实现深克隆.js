function deepClone(m) {
    if (Array.isArray(m)) {
        var result = [];
        // 判断是不是数组
        for (var i = 0; i < m.length; i++) {
            result.push(deepClone(m[i]));
        }

    }
    else if (typeof m == 'object') {
        // 判断是不是对象
        var result = {};
        for (var k in m) {
            result[k] = deepClone(m[k]);
        }
    }
    else {
        var result = m;
    }
    return result;
}
var arr = [1, 2, 3, 4, 5, [12, 34, 123, { 'a': 4567, 'b': 4567 }]];
var arr1 = deepClone(arr);
var arr2 = arr1[5];
var arr3 = arr2[3];
var _arr2 = arr[5];
var _arr3 = _arr2[3];

console.log(arr1);
console.log(arr == arr1); // false
console.log(arr[5] === arr1[5]);  // false
console.log(arr[5] == arr1[5].a);  // false
console.log(arr3 == _arr3);  // false


