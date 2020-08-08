// var obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }
// var obj2 = {};
// for (var k in obj1) {
//     obj2[k] = obj1[k]
// }
// console.log(obj2);  //{ a: 1, b: 2, c: 3, d: 4 }
var obj1 = {
    a: 1,
    b: 2,
    c: [3, 5],
    d: 4
}
var obj2 = {};
for (var k in obj1) {
    obj2[k] = obj1[k]
}
console.log(obj1 == obj2);    //false
console.log(obj1.c == obj2.c);    //true