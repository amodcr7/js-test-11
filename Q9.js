let target = 3;
let input = [1,2,3,4];

function findIndex(arr){
    for(let i = 0;i < arr.length; i++){
        if(arr[i] == target){
          return i
        }
    }      
}

console.log(findIndex(input));

