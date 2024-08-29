// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3] 
let num=2;
let pos= arr.indexOf(num)
arr.splice(pos,1)
let pos2= arr.indexOf(num)
arr.splice(pos2,1)
console.log(arr)

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

// let number = 287152; 
// let number2=number.toString();
// console.log(number2.length)



// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

let number = 287152;
console.log("Sum of digits:", sumOfDigits(number)); // Output: 25


// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1

let digit=5;
let fact=1;
for (let i=1; i<=digit; i++) {
    fact=fact*i;
}

console.log(fact);

// Find the largest number in an array with only positive numbers

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = arr1[0];
for (let i = 1; i < arr1.length; i++) { 
    if (arr1[i] > max) {
        max = arr1[i];
    }
}   
console.log(max);
