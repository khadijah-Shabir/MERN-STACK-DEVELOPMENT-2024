let div=document.querySelector("div");
let ul=div.querySelector("ul");
let li=ul.querySelectorAll("li");

div.addEventListener("click",function(e) {
    e.stopPropagation();
    console.log("div was clicked");
});

ul.addEventListener("click",function(e) {
    e.stopPropagation();
    console.log("ul was clicked");
});

for(item of li){
    li.addEventListener("click",function(e) {
        e.stopPropagation();
        console.log("li was clicked");
    });
}