let nums = [1,2,3,4,5,6,7,8,9,10];

function c1(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            sum += Math.pow(arr[i],2);
        }
    }
    return sum;
}

console.log(c1(nums));