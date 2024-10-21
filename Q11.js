

const input = [1, 2, 4, 5]
let expectedsum = 0;
for (let i = 0 ; i<= input.length+1; i++){
   expectedsum+= i;
}
const actualsum = input.reduce((pre,cur)=> pre+cur,0);
console.log(expectedsum - actualsum );