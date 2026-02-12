//A string is a pangram if it contains all 26 letters of alphabet.
function pangram(str){
    let set= new Set();
    for(let char of str.toLowerCase()){
        if(char>="a" && char<="z"){//JS actually compares their ASCII values. 'a' → 97 ....... 'z' → 122
            set.add(char);
        }
    }
    return set.size === 26;
    
}
console.log(pangram("qwertyuiopasdfghjklzxcvbnmhgs"));//true
console.log(pangram("qwertyvbnmhgs"));//false