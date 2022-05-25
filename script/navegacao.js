let btnPlay = document.querySelectorAll(".btn-play");
let btnGoAddWord = document.querySelector("#go-add-word");
let btnCancel = document.querySelector(".btn-cancel");
let btnAddWord = document.querySelector(".btn-add-word");
let inicioGame = document.querySelector("#inicio");
let sectionAddWord = document.querySelector("#section-add-word");
let inputNewWoRD = document.querySelector(".new-word");
let inputHint = document.querySelector("#hint");
let warningWordAdded = document.querySelector("#warning-word-add");
let sectionGame = document.querySelector("#section-game");


function mostraInicio (){
    inicioGame.className = "main-inicio";
}

function escondeInicio() {
    inicioGame.className = "main-inicio-none";
}

function mostraSectionAddWord() {
    sectionAddWord.className = "all-containers-add";
}

function escondeSectionAddWord() {
    sectionAddWord.className = "all-containers-add-none";
}

function goToAddWord(){
    setTimeout(function() {
        escondeInicio();
        mostraSectionAddWord();
    }, 100);
}

function goToIndex(){
    escondeSectionAddWord();
    mostraInicio();
    inputNewWoRD.value="";
    inputHint.value="";
}

function mostraGame() {
    sectionGame.className = "main-game";
}

function escondeGame() {
    sectionGame.className = "main-game-none";
}

function goToGame(){
    setTimeout(function() {
        escondeInicio();
        escondeSectionAddWord();
        mostraGame();
    }, 50);
}

// Fazer todos os botoes jogar executar a função goToGame
for(var x=0; x<btnPlay.length; x++){
    btnPlay[x].addEventListener("click", goToGame);
 }


btnGoAddWord.addEventListener("click", goToAddWord);
btnCancel.addEventListener("click", goToIndex);

