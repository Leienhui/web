var obj1 = {
  a: 1,
  b: 2,
  c: [
    33,
    44,
    {
      m: 55,
      n: 66,
      o: [77, 88, 99],
    },
  ],
};
function deepClone(data) {
  // 判断是不是数组
  if (Array.isArray(data) == true) {
    // 判断是数组的情况，必须第一个判断,因为typeof数组的类型也是object
    var result = [];
    for (var i = 0; i < data.length; i++) {
      result.push(deepClone(data[i]));
    }
  } else if (typeof data == "object") {
    // 判断是对象的情况
    var result = {};
    for (var k in data) {
      result[k] = deepClone(data[k]);
    }
  } else {
    var result = data;
  }
  //   必须要return
  return result;
}
var obj2 = deepClone(obj1);
console.log(obj1.c == obj2.c); //false;
console.log(obj2.c); //[ 33, 44, { m: 55, n: 66, o: [ 77, 88, 99 ] } ]
console.log(obj1.c); //[ 33, 44, { m: 55, n: 66, o: [ 77, 88, 99 ] } ]
