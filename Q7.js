function checkSorted(arr){
    
    for(let i=1; i<arr.length; i++){
     if(arr[i] > arr[i-1]){
        continue;
     }else{
        return false
     }
}
return true
}

let input = [1,2,3,4,5];
console.log(checkSorted(input));
