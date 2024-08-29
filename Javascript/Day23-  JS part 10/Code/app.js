let btn=document.querySelector('button');
console.dir(btn);

// btn.onclick=function() {
//     console.log("button was clicked");
// }

 function sayHello(){
    alert("Hello World");
 }

 btn.onclick=sayHello;

btn.addEventListener("click", function(event){
    console.log(event);
    console.log("button was clicked");
});

