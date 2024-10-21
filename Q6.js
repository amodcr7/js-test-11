function secondlargest(arr){
    arr = arr.sort((a,b)=>a-b)
    
    return arr[arr.length -2];
    
}

let input = [5,7,2,9,3];
console.log(secondlargest(input));
