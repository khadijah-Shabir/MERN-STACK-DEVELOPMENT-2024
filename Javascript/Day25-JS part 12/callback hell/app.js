// callback hell/nesting of functions

// let h1=document.querySelector("h1");

// function changeColor(color, delay, nextColorchange){
//     setTimeout(() => {
//         h1.style.color=color;
//         if (nextColorchange) nextColorchange();
//     }, delay);
// }

// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//        changeColor("yellow", 1000, ()=>{
//            changeColor("green", 1000, ()=>{
//                changeColor("blue", 1000);
//            });
//        });
//     });
// });


let h1=document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            h1.style.color=color;
            resolve("The color was changed");
        }, delay);

    })
    
}

changeColor("red", 1000)
    .then((message)=>{
        console.log(message);
        return changeColor("orange", 1000)
    })
    .then((message)=>{
        console.log(message);
        return changeColor("yellow", 1000)
    })
    .then((message)=>{
        console.log(message);
        return changeColor("green", 1000)
    })
    .then((message)=>{
        console.log(message);
        return changeColor("blue", 1000)
    })
    .then((message)=>{
        console.log(message);
    })

//promises

// function saveToDB(data, success, failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

saveToDB(
    "khadijah", 
    ()=>{
        console.log("success: data was saved");
        saveToDB(
            "Shabir", 
            ()=>{
                console.log("success2: data was saved");
            },
            ()=>{
                console.log("failure2: data was not saved. Poor connection");
            }
        );
    },
    ()=>{
        console.log("failure: data was not saved. Poor connection");
    }
);



function saveToDB(data){
    return new Promise((resolve, reject) =>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success: data was saved");
        }else{
            reject("failure: data was not saved. Poor connection");
        }
    });
}

// let requesst=saveToDB("Apna COllege");
// request 
//     .then(()=>{
//         console.log("Promise resolved")
//     })
//     .catch(()=>{
//         console.log("Promise rejected")
//     })

saveToDB("Apna COllege")
    .then(()=>{
        console.log("Promise resolved")
    })
    .catch(()=>{
        console.log("Promise rejected")
    });

//Promise Chaining


// saveToDB("Apna COllege")
//     .then(()=>{
//         console.log("Promise resolved: Data 1 was saved successfully")
//         saveToDB("Apna COllege").then(()=>{
//             console.log("Data 2 was saved successfully")
//         });
//     })
//     .catch(()=>{
//         console.log("Promise rejected")
//     });

saveToDB("Apna COllege")
    .then((result)=>{
        console.log("result : ",result)
        console.log("Promise resolved: Data 1 was saved successfully")
        return saveToDB("Apna COllege");  //.then() method will return an object or promises on which we will apply then or catch methods again
    })
    .then((result)=>{
        console.log("result : ",result)
        console.log("Data 2 was saved successfully")
        return saveToDB("Apna Shradha")
    })
    .then((result)=>{
        console.log("result : ",result)
        console.log("Data 3 was saved successfully")
    })
    .catch((error)=>{
        console.log("error : ", error)
        console.log("Promise rejected")
    });






