function maxNum(arr){
    stack = [];
for(let i=0; i<=arr.length; i++){
    for(let j=1; j<=arr.length; j++ ){
        if(arr[i]>arr[j]){
            return arr[i];
        }
        else{return arr[j]}
    }
}
}

let input = [1,5,3,9,2]
console.log(maxNum(input));
