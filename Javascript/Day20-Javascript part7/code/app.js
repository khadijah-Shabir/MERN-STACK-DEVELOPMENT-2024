const sum=(a,b)=>{
    console.log(a+b);
};

let res=sum(1,2);
console.log(res);

// implicit arrow functions

const mul=(a, b)=>a*b;
const cube=(a)=>a*a*a;

//setTimeout

console.log("hi there");
setTimeout(()=>{
    console.log("Apna College");
},4000);

console.log("Welcome to")

//setInterval

console.log("hi there");
let id=setInterval(()=>{
    console.log("Apna College");
},10000);

console.log("Welcome to")

console.log(id);
clearInterval(id);


//this keyword with arrow functions
const student={
    name:"apna college",
    marks:90,
    prop: this,    //global scope which is a window object
    getName: function(){
        console.log(this);  //student object
        console.log(this.name);
    },
    getMarks: ()=>{
        console.log(this);  //window object
        console.log(this.marks);
    },

    getInfo1:function(){
        setTimeout(()=>{   
            console.log(this);  //student object
        },2000);
    },

    getInfo2:function(){
        setTimeout(function(){
            console.log(this);  //window object
        },2000);
    },
};
console.log("prop");
student.prop;
console.log("name");
student.getName();
console.log("Marks");
student.getMarks();
console.log("arrow function");
student.getInfo1(); 
console.log("normal function");
student.getInfo2();


//practice questions
const square=(a)=>a*a;
console.log(square(2));



//Practice question 2
let id2=setInterval(()=>{
    console.log("hi");
},2000);

setTimeout(()=>{
    clearInterval(id2);
    console.log("Clear interval ran");
},10000);


