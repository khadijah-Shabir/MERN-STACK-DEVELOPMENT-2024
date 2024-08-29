// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array

let array=[1,2,3,4,5];

let square=array.map(el => el*el);
console.log(square);

let sum=square.reduce((a,b)=> a+=b);
console.log(sum);
let average=sum/square.length;
console.log(average);


// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

let arr=[5,10,15,20,25]
let newarr=arr.map((el)=> (el+5));
console.log(newarr);

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array

let arr1=["hello","how","are","you"]
let newarr1=arr1.map((el)=> el.toUpperCase());
console.log(newarr1)

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.


function doubleAndReturnArgs(arr, ...args) {
    let newArr=[...arr];
    let doubleargs=args.map((el)=>el*2);
    newArr=newArr.concat(doubleargs);
    return newArr;
    
}
let res=doubleAndReturnArgs([1,2,3],4,4);
console.log(res);


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object


function mergeObjects(obj1, obj2) {
    let newObj={...obj1,...obj2};
    return newObj;
};

let result=mergeObjects({a:1,b:2},{c:3,d:4});
console.log(result);
