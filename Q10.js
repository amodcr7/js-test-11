let input = [1,2,2,3,4,4,5];
let arr = [];
function removeDup  (input) {
for(let i = 0;i < input.length;i++){
  if(!arr.includes(input[i])){
    arr.push(input[i]);
  }
}
return arr;
}.00
console.log(removeDup(input))