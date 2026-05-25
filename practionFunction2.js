function cv(str){
    let count = 0;
    for (const char of str){
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){  
            count++;
        }
    }
    return count;
}
let str = "ssppllooo";
let result = cv(str);
console.log(result);