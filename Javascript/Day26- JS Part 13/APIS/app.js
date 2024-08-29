// let jsonData='{"fact":"While many parts of Europe and North America consider the black cat a sign of bad luck, in Britain and Australia, black cats are considered lucky.","length":146}';

// let object=JSON.parse(jsonData); //for coverting json data into js object
// console.log(object);
// console.log(object.fact);

// let student={
//     name: "khadijah",
//     marks:90
// }
// console.log(JSON.stringify(student));
// console.log(JSON.stringify(student.name));


//fetching data from APis

let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log("data1 is", data.fact);
    return fetch(url)
})
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("data2 is", data.fact);
})
.catch((err)=>{
    console.log("error", err);
})


//fetching data using async and await keywords along with try and catch block
let link="https://catfact.ninja/fact";
fetch(link)

async function getFacts(){
   try{
    let res= await fetch(link);
    let data=await res.json();
    console.log("data", data.fact);

    let res2= await fetch(link);
    let data2=await res2.json();
    console.log("data", data2.fact);
   }catch(e){
    console.log("Received error: " + e.message);
   }

   console.log("Bye")
}

//getting data using Axios

let url2="https://catfact.ninja/fact";
async function getfacts(){
    try{
        let res= await axios.get(url2);
        return res.data.fact;
    }catch(e){
       console.log("error--", e);
       return "No fact found";
    }
}

let button=document.querySelector("button");
button.addEventListener("click",async()=>{
  let fact=await getfacts();
  console.log("fact", fact);
  let p=document.querySelector("p");
  p.innerText=fact;
});


