function sum(arr){
    let sum = 0;
    for(const i of arr){
        sum += i
    }
    return sum;
}
let input = [1,2,3,4]
console.log(sum(input));
