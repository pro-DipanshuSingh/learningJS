//For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.
let student = [85, 97, 44, 37, 76, 60];
sum=0;
for (idx = 0; idx<student.length; idx++){
sum = sum+ student[idx];
}
console.log(sum);
total= student.length 
avg = sum/total;
console.log("aveg is", avg); 