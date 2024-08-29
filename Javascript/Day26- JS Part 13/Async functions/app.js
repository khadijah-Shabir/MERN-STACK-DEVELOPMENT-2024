async function greet(){
    // abc.abc();
    // throw "weak connection";
    // throw "404 page not found";
    return "hello";
}

greet()
  .then((result)=>{
    console.log("Promise was resolved");
    console.log("the result was", result);
  })
  .catch((error)=>{
    console.log("Promise was rejected", error);
  })

//arrow functions can also be made async
//   let demo=async()=>{
//     return 5;
//   }
//now this arrow function will return an object

//await keyword for asynchronous functions

function getnum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           let num=Math.floor(Math.random()*10)+1;
           console.log(num);
           resolve();
        }, 1000);
    });
}

async function demo(){
    await getnum();
    await getnum();
    getnum();
}

//Color example with the help of promises and aync await keywords t avoid call back hell

// let h1=document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             h1.style.color=color;
//             resolve("The color was changed");
//         }, delay);

//     })   
// }

// async function colordemo(){
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("yellow", 1000);
//     changeColor("orange", 1000);


//     let a=5; 
//     console.log(a);
//     console.log("new number is ", a)
// }




// changeColor("red", 1000)
//     .then((message)=>{
//         console.log(message);
//         return changeColor("orange", 1000)
//     })
//     .then((message)=>{
//         console.log(message);
//         return changeColor("yellow", 1000)
//     })
//     .then((message)=>{
//         console.log(message);
//         return changeColor("green", 1000)
//     })
//     .then((message)=>{
//         console.log(message);
//         return changeColor("blue", 1000)
//     })
//     .then((message)=>{
//         console.log(message);
//     })


let h1=document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let num=Math.floor(Math.random()*5)+1;
            if (num>3){
                reject("Promise rejected")
            }

            h1.style.color=color;
            resolve("The color was changed");
        }, delay);

    })   
}

//handling rejections

async function colordemo(){
    try{
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("yellow", 1000);
        await changeColor("orange", 1000);
    }catch(e){
        console.log("error caught")
        console.log(e);
    }
   

    let a=5; 
    console.log(a);
    console.log("new number is ", a)
}
    