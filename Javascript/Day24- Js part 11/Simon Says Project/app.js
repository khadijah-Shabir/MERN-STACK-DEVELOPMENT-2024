let gameSeq=[]
let userSeq=[]

let btns= ["red","yellow","green","purple"]

let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game started");
        started=true;
    }

    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function UserFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomInd=Math.floor(Math.random()*4);
    let randomColor=btns[randomInd];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomInd);
    // console.log(randomBtn);
    // console.log(randomColor);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn); // any random button will flash
}

function checkAns(ind){
    //   console.log("current level: ", level);
    // let ind=level-1;
    if(gameSeq[ind]===userSeq[ind]){
        if(userSeq.length==gameSeq.length){
            setTimeout(function(){
                levelUp();
            },1000);
        }
    }else{
        h2.innerHTML=`Game over. Your score was <b>${level}</b>.</br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
   let btn=this;
   UserFlash(btn); // any button will flash

   userColor=this.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level=0;
}




