function vowels(arr){
    let count = 0
    for(let i of arr){
        if(i==="a"|| i==="e"|| i==="i"|| i==="o"|| i==="u"){
            count ++;
        }
    }
    return count;
}

let input = "hello"
console.log(vowels(input));
