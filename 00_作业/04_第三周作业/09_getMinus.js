function isMinus(num){
    var flag = true;
    for(let i = 2; i <= Math.sqrt(num); i ++){
        if(num % i == 0){
            flag = false;
            break
        }
    }
    return flag
}

function findMinus(){
    let min = 2;
    let max = 3;
    let state = 4;

    while(true){

        if(isMinus(state)){
            min = max;
            max = state;

            if(max - min >= 100){
                console.log(`${min}  --  ${max}`);
                break
            }
        }
        state++;
    }
    
}


findMinus()