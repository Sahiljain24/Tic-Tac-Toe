const head = document.querySelector("p");
const newGame = document.querySelector("button");
const box = document.querySelectorAll(".box");



head.innerText="Lets Play !";
let currplayer= "Y"
let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 3, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

newGame.addEventListener('click',start);
 
function start(){
    if(currplayer=="Y"){
        currplayer="X";
    }else{
        currplayer="Y";
    }
   newGame.classList.remove("active");
   head.innerText=`Current Player -${currplayer}`;
}
box.forEach(element => {
    element.addEventListener('click',()=>play(element));
});

function play(element){
    if(element.innerText!=""){
        return;
    }
    element.innerText= currplayer;
    start();
}