// question 1
let arr=[7, 9, 0, -2]
let n=3
let newarr=arr.slice(0,n)
console.log(newarr)

//question2
let newbrr=arr.slice(-3)
console.log(newbrr)

//Check if a string is blank or not 
let string = "";
if (string.length > 0) {
    console.log("string is not blank");
} else {
    console.log("string is empty");
}

//character at a given index is lower case or not
let str = "Hello";
let index = 0;
if (str.charCodeAt(index) >= 97 && str.charCodeAt(index) <= 122) {
  console.log("The character at index " + index + " is lower case.");
}else {
  console.log("The character at index " + index + " is not lower case.");
}

//strip leading or trailing zeroes
let a = " hello "; 
let b=a.trim();
console.log(a);
console.log(b);


//check if an element exists in an array
let array=[1,3,4,5,6]
console.log(array.includes(1));
console.log(array.includes(7));