var sum=0;
for(var i=1;i<=313;i++){
    var value=1/(Math.sqrt(2*i-1)+Math.sqrt(2*i));
    sum+=value;
}
console.log(sum);
// var i=0;
// var sum=0;
// while(true){
//    sum+=1/(Math.sqrt(++i)+Math.sqrt(++i));
//    if(i==626){
//        break;
//    }
// }
// console.log(sum);