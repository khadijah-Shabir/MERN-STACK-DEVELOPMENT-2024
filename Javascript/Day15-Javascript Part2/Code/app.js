let color="green";
if (color==="green"){
    console.log("Go!")
}
if (color==="yellow"){
    console.log("Slow Down!")
}
if (color==="Red"){
    console.log("Stop!")
}

let string="khadijah";
if (string[0]==='k' && string.length>3){
    console.log("Good string")
}else{
    console.log("Not a good string")
}

// Question1

let num=100;
if (num%10==0){
    console.log("good")
}else{
    console.log("Bad")
}

//Question 2
// let name=prompt("Enter your name");
// let age=prompt("Enter your age");
// result= `${name} is ${age} years old`;
// alert(result)


let Quarter=1; 
switch(Quarter){
    case 1:
        console.log(`janurary, feburary, March`);
        break;
    case 2: 
        console.log(`April, May, June`);
        break;
    case 3: 
        console.log(`July, August, September`);
        break;
    case 4: 
        console.log(`October, November, December`);
        break;          
    default:
        console.log(`Invalid Quarter`);
        break;

}

let num1 = 1, num2 = 2, num3 = 3;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {    
    console.log(num3);
}

//program to check if last two numbers have the same digits

let num4 = 123;
let num5= 543;

if (num4 % 10 === num5 % 10) {
    console.log("true");
} else {
    console.log("false");
}



