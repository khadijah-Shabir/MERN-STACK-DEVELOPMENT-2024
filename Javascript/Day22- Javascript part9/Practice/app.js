let newP = document.createElement('p');
newP.innerText = "Hey, I'm a new paragraph";  // Corrected the spelling of "paragraph"
document.querySelector("body").appendChild(newP);
newP.classList.add('red');


let h3 = document.createElement('h3');
h3.innerText = "Hey, I'm Blue";  
document.querySelector("body").appendChild(h3);
h3.classList.add('blue');


let div = document.createElement('div');
let h1 = document.createElement('h1');
let para = document.createElement('p');

h1.innerText = "Hey, I'm inside div"; 
para.innerText = "Me too";
div.append(h1);
div.append(para);

div.classList.add('divstyle');
document.querySelector("body").appendChild(div);



// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'


let newInput = document.createElement('input');
document.querySelector("body").appendChild(newInput);
let newButton = document.createElement('button');
newButton.innerText = "Click me";
document.querySelector("body").appendChild(newButton);

// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'

newButton.id="btn";
newInput.placeholder="username";
console.log(newButton.id);


// Qs3. Access the btn using the querySelector and button id. Change the button background 
// color to blue and text color to white.

newButton.classList.add("btncolor");


// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple

let heading=document.createElement("h1");
heading.innerText="DOM Practice";
heading.classList.add("decoration");
document.querySelector("body").prepend(heading);

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold

// Create a p tag on the page
let paragraph = document.createElement("p");

// Set the innerHTML of the paragraph with "Delta" in bold
paragraph.innerHTML = "Apna College <strong>Delta</strong> Practice";

// Append the paragraph to the body of the document
document.querySelector("body").appendChild(paragraph);







