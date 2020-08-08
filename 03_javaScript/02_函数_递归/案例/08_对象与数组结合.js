var arr = [
    1, 2, [
        {
            "id": 1,
            "name": "邵山欢老师",
            "assistant": "小池"
        },
        {
            "id": 2,
            "name": "邵山欢",
            "assistant": "小池"
        },
        {
            "id": 1,
            "name": "邵老师",
            "assistant": "小池"
        }
    ]
]
var arr1 = arr[2];
console.log(arr1[0].name);