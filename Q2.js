
function palindrome(str){
    let rev = "";
    for(i=str.length-1; i>=0; i--){
        rev=rev+str[i];
    }
    if(str===rev){
        return true;
        
    }else{
        return false;
        
    }
    
}

let str = "racecar"
console.log(palindrome(str));
