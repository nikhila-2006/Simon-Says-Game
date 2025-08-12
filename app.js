let gameSeq=[];
let userSeq=[];
let btns=["yellow","green","red","purple"]
let start=false;
let level=0;
let prevScore=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game is started");
        start=true;
        levelUp();
    }
})
function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    flashBtn(randomBtn);
}
function reset(score){
    start=false;
    level=0;
    gameSeq=[];
    userSeq=[];
    if(prevScore<=score){
        prevScore=score;
        h3.innerHTML=`Your highest score is ${prevScore}`;
    }else{
        h3.innerHTML=`Your highest score is ${prevScore}`;
    }
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score is<b> ${level} </b> </br>Press any key to Start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        score=level;
        reset(score);
    }
}

function btnPress(){
    let pressBtn=this;
    flashBtn(pressBtn);
    userColor=pressBtn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}