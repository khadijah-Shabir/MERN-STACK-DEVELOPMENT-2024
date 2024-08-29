//We are learning higher order funcions

/**
 * Returns a function that checks if a given number is even or odd based on the request.
 *
 * @param {string} request - The type of check to perform, either 'even' or 'odd'.
 * @return {function} A function that takes a number as an argument and logs the result to the console.
 */
// function evenOrOddFactory(request){

//     if(request === 'even'){
//         let even=function(number){
//             console.log(number % 2 === 0);
//         }
//         return even;
//     }else if(request === 'odd'){
//         let odd= function(number){
//             console.log(!(number % 2 === 0));
//         }
//         return odd;
//     }else{
//         throw new Error('Invalid input');
//     }
// }

// request='even';

// let evenOrOdd = evenOrOddFactory(request);
// evenOrOdd(10);
// evenOrOdd(11);  


//functions which are defined inside objects are called methods

const calculator={
    add:function(a,b){
        return a+b;
    },
    substract:function(a,b){
        return a-b;
    }, 
    multiply:function(a,b){
        return a*b;
    } 
}

const calculator2={
    add(a,b){
        return a+b;
    },
    substract(a,b){
        return a-b;
    }, 
    multiply(a,b){
        return a*b;
    } 
}

//Homework

// Qs1. Write a JavaScript function that returns array elements larger than a number.

function largerThan(array, number){
    let res=[];
    for(let i=0;i<array.length;i++){
        if (array[i]> number){
            res.push(array[i]);
        } 
    }
    return res;
}

largerThan([1,2,3,4], 2);

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

function uniqueCharacters(string){
    let res=[];
    for(let i=0;i<string.length;i++){
        if(!res.includes(string[i])){
            res.push(string[i]);
        }       
    }       
    res=res.join('');
    return res;    
}                                               

let res=uniqueCharacters("abcdabcdefgggh");
console.log("Unique characters: "+res);

// Qs3. Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America"

function country(name) {
    let res=name[0];
    for(let i=0;i<name.length;i++){
        if(name[i].length>res.length){
            res=name[i];
        }
    }    
    return res;
}

country = country(["Australia", "Germany", "United States of America"]);
console.log("Country with longest name: "+country);

// Qs4. Write a JavaScript function to count the number of vowels in a String 
// argument.

function countVowels(string){
    let res=0;
    for(let i=0;i<string.length;i++){
        if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){
            res+=1;
        }
    }
    return res;
}

let count=countVowels("hello");
console.log("Number of vowels: "+count);

// Qs5. Write a JavaScript function to generate a random number within a range 
// (start, end).

/**
 * Generates a random number within a given range.
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} end - The ending number of the range (inclusive).
 * @return {number} A random number within the range [start, end].
 */
function randomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1) + start);
}

let num1=randomNumber(1,10);
function randomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1) + start);
}

let num=randomNumber(1,10);
console.log("Random number: "+num);
