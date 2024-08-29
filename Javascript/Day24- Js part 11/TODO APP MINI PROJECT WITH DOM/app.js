let button = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

button.addEventListener('click', function() {
    let task = input.value.trim();
    
    // Check if the input is not empty
    if (task !== "") {
        let li = document.createElement('li');
        li.innerText = task;

        let delbtn = document.createElement('button');
        delbtn.innerText = "Delete";
        delbtn.classList.add("delete");

        ul.appendChild(li);
        li.appendChild(delbtn);
        
        // Clear the input field
        input.value = "";
    }
    // If the input is empty, do nothing
});

ul.addEventListener("click", function(e) {
    if (e.target.nodeName == "BUTTON") {
        let listitem = e.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});

// This event listener will work for the already existing elements on the page and wil not work for elements which are added by event listeners

// let deletebtns=document.querySelectorAll(".delete");
// button.addEventListener("click",function(){
//    for(delbtn of deletebtns){
//        delbtn.addEventListener("click",function(e){
//            let par=this.parentElement;
//            console.log(par);
//            par.remove();
//        })
//    }
// })