const vitalis = document.querySelector('.vitalis');
const background = document.querySelector('.background');
let position = 0;
let isJumping = false;
var musica=document.getElementById("musica");
var fim=document.getElementById("fim");


musica.play();

function handleKeyUp(event) {
    if (event.keyCode === 32){
        if(!isJumping){

        jump();
        }
    }
}

function jump(){

    isJumping =true;

    let upInterval = setInterval(() => {
        if (position>=200){
            clearInterval(upInterval);

            //descendo

            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping=false;
                } else {
                position-=20;
                vitalis.style.bottom = position + 'px';
                }
            },30);

        }else {}
        // Subindo
        position +=20;

        vitalis.style.bottom = position + 'px';
}, 20);
}

function createBombi(){
    const bombi = document.createElement('div');
    let bombiPosition =1000;
    let randomTime = Math.random() * 6000;

    bombi.classList.add('bombi');
    bombi.style.left = 1000 + 'px';
    background.appendChild(bombi);

    let leftInterval = setInterval(() => {
        if (bombiPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(bombi);
        } else if (bombiPosition > 0 && bombiPosition < 60 && position <60)  {
            
            //game over

            clearInterval(leftInterval);
            document.body.innerHTML= '<h1 class="game-over">Fim de jogo</h1>';
        

        } else {
            bombiPosition -= 10;
            bombi.style.left =bombiPosition +'px';

        }
    },30);

    setTimeout(createBombi,randomTime);

}
createBombi();

document.addEventListener('keyup', handleKeyUp); 


