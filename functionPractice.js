//scount vowel from a string
function countvowel(str){
let count=0;
let vowel='aeiou';
for(i=0; i<str.length; i++){
if (vowel.includes(str[i])){
count++}
}
return count;
}
let str = "ssppllooo";
let result = countvowel(str);
console.log(result);

//count consonant from a string
function countconsonant(str) {
    let count = 0;
    let vowel = 'aeiou';
    for (i=0; i<str.length; i++){
        if (!vowel.includes(str[i]))
        count++;
    }
    return count;      

}
let str1 = "ssppllooo";
let result1 = countconsonant(str1);
console.log(result1);   
