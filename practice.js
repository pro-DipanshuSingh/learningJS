//Prompt the user to enter their full name. Generate a username for them based on the input.
//Start username with @, followed by their full name and ending with the fullname length.
const prompt = require('prompt-sync')();
let fullname = prompt("enter full name");
let username = "@" + fullname.replaceAll(" ", "") + fullname.length;
console.log("your fullname is " + fullname);
console.log("your username is " + username);
