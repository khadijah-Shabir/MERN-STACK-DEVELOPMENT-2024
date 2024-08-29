let arr=[
    {
        name: "harry",
        age: 18,
        marks: 90
    },
    {
        name: "sally",
        age: 20,
        marks: 88
    },
    {
        name: "carl",
        age: 19,
        marks: 98
    }
]

arr.forEach((student)=>{
   console.log(student.name);
});

//map function

let gpa=arr.map((ele)=>{
    return ele.marks/10;
});

console.log(gpa);

let array=[1,2,3,4]

let double=array.map((num)=>{
    return num*num;
});
console.log(double);



//filter function
let brr=[1,2,3,4,5,6,7,8,9,10];
let crr=brr.filter((num)=>{
    return num%2==0;
});
console.log(crr);

//every function
[2,4,6,8].every((num) => (num%2==0));

//reduce function

let drr=[1,2,3,4,5,6,7,8,9,10];
let sum=drr.reduce((a,b)=>{
    return a+b;
});
console.log(sum);

//reduce function to find the maximum number

let max=drr.reduce((a,b)=>{
    return Math.max(a,b);
});
console.log(max);

//reduce function to find the maximum number another way

let max1=drr.reduce((a,b)=>{
    if(a>b){        
        return a;
    }
    else{
        return b;
    }       
}); 
console.log(max1);

//check if all the numbers in our array are multiple of 10 or not

let check=drr.every((num)=>{    
    return num%10==0;
}); 

console.log(check);

//create a function to find the minimum number in the array 
//here a is the accumulator while b is the current value from the array

/**
 * Finds the minimum number in the given array.
 * @param {Array<number>} arr - The array of numbers.
 * @returns {number} - The minimum number in the array.
 */
let min = drr.reduce((a, b) => {
    if (a < b) {       
        return a;
    }
    else {
        return b;
    }      
}); 
console.log(min);


//spread function

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];

let arr3=[...arr1,...arr2];
console.log(arr3);

let res=Math.min(...arr1,...arr2);
console.log(res);

console.log(...arr1); //one by one printing the elements of the array
console.log(..."apnacollege");

//spread with object literals

let obj1={
    name:"harry", 
    age:18,
    marks:90
};

    

let obj2={...obj1,id:12332, country:"india"};
console.log(obj2);  

//spread an array in terms of objects
let arrayed=[1,2,3,4,5];
let obj={ ...arrayed};
console.log(obj);

//rest

let arr4=[1,2,3,4,5,6,7,8,9,10];
let [a,b,...c]=arr4;
console.log(a,b,c);
//rest operator to print all the elements of array passed as argument

let rest=(...args)=>{

    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
    
}
rest(1,2,3,4,5,6,7,8,9,10);

//rest to finf the sum of all the elements of the array

let sum1=(...args)=>{    
    let sum=0;
    for(let i=0; i<args.length; i++){
        sum+=args[i];
    }
    console.log(sum);
} 
sum1(1,2,3,4,5,6,7,8,9,10);


// REST TO FIND THE MINIMUM AMONG GIVEN ELEMENTS

let min1=(msg, ...args)=>{
    console.log(msg);
    let min=args[0];
    for(let i=0; i<args.length; i++){
        if(args[i]<min){
            min=args[i];
        }
    }
    console.log(min);
}
min1("deeja",2,3,4,5,6,7,8,9,10); 

//destructuring

let arrays=["khadijah", "Ayesha", "Malaika","Rabia"];
let[winner, looser, ...others]=arrays;  //rest combined here
console.log(winner,looser, others);


