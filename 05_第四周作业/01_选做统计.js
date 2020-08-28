// // 1.	[选做题] 比如数组[1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1]中，0可以看做海洋，1可以看做陆地，没有其他数组，连续的1就是同一片陆地。那么这个数组中，就有6片陆地。请用JS编程，寻找这样的数组的陆地总数。
// var arr = [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1];

// var nowPos = 0;
// var inOne = false;
// var oneNum = 0;

// while(nowPos < arr.length){

//     if(arr[nowPos] == 1 && !inOne){
//         oneNum += 1;
//         inOne = true
//     }

//     if(arr[nowPos] == 0){
//         inOne = false
//     }

//     nowPos ++;
// }


// console.log(oneNum)



//添加一个0
var arr = [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 0 && arr[i + 1] == 1) {
        sum++;
    }
}
console.log(sum);

