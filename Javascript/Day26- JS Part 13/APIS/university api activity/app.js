let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click", async()=>{
    let country= document.querySelector("input").value;
    console.log("country is", country);

    let colArr= await getColleges(country);
    Show(colArr);
});

function Show(colArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.append(li);
    }

    
}

async function getColleges(country){
    try{
        let res= await axios.get(url+country);
        return res.data ;
    }catch(e){
      console.log(e);
      return [];
    }
    
}

