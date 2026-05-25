/*const sum = (a, b) => a + b;
console.log(sum(5, 10));
const multiplyyy = (a, b)=> a*b;
console.log(multiplyyy(5,10));
const multiply = (a,b,c,d) => a*b*c*d;
console.log(multiply(5,10,15,20));*/

// counting vowels from string using arrow function
const Countvow = (str) => {
let count =0;
for (const char of str){
if (char=='a'|| char=='e'|| char=='i'|| char=='o'|| char=='u'|| char=='A'|| char=='E'|| char=='I'|| char=='O'|| char=='U'){ 
count++;
}}
return count;
}
console.log(Countvow('AsDDa'));

console.log (Countvow('ASDDa'));