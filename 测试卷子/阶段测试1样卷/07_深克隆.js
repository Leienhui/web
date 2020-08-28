// 请实现数组的深克隆
function deepCopy(data) {
    // 如果是数组
    if (Array.isArray(data)) {
        var result = [];
        // 遍历数组的每一项
        for (var i = 0; i < data.length; i++) {
            result.push(deepCopy(data[i]));
        }

    }
    else if (typeof (data) == 'object') {
        // 遍历对象
        var result = {};
        for (var k in data) {
            result[k] = deepCopy(data[k]);
        }
    }
    else {
        var result = data;
    }
    return result;
}
var arr = [1, 2, 3, [12, 34, 56], { 'a': 1, 'b': [1, 2, 3, 4, 5] }];
var a = deepCopy(arr);
console.log(a);




