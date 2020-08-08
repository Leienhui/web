var obj = {
    a1: { a: 5 },
    a3: { a: 10 },
    a2: { a: 52 },
    a4: { a: 3 },
    a6: { a: 90 },
    a5: { a: 22 },
}
var arr = [];
for (var k in obj) {
    arr.push(obj[k]);
}
arr.sort(function (a, b) {
    return a.a - b.a;
})
console.log(arr);
