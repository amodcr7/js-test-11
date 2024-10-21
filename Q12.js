function intersection(num1,num2){
    
let intersect=[];
    for(let num of num1){
        if(num2.includes(num) && (!intersect.includes(num))){
            intersect.push(num)
        }
    }
    return intersect;
}
console.log(intersection([1,2,3],[2,3,4]));