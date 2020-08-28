var newArr=[];
function sample(arr,n){
    if(newArr.length==n) return newArr;
    var idx=parseInt(Math.random()*arr.length);
    if(!newArr.includes(arr[idx])){
        newArr.push(arr[idx]);
    }
    return sample(arr,n)
}
var arr=[1,2,3,34,5,6,8,98];
console.log(sample(arr,2));