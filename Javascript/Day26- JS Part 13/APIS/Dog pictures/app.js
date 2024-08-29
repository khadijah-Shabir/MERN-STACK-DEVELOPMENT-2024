

//getting data using Axios

let url="https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res= await axios.get(url);
        return res.data.message;
    }catch(e){
       console.log("error--", e);
       return "/";
    }
}

let button=document.querySelector("button");
button.addEventListener("click",async()=>{
  let link=await getImage();
  let img=document.querySelector("img");
  img.setAttribute("src", link);
});


//Lets use axios for sending headers as well

let url2="https://icanhazdadjoke.com/";
// const config={headers: { "Accept": "application/json"}}
async function getJoke(){
    try{
        let res= await axios.get(url2, {
            headers:{
                "Accept": "application/json"
            }
        });
       console.log(res.data.joke);
    }catch(e){
       console.log("error--", e);
       return "No joke found";
    }
}
