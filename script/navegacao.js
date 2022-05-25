
let btnPlay = document.querySelector(".btn-play");
let btnGoAddWord = document.querySelector("#go-add-word");
let btnCancel = document.querySelector(".btn-cancel");
let btnAddWord = document.querySelector(".btn-add-word");
let inicioGame = document.querySelector("#inicio");
let sectionAddWord = document.querySelector("#section-add-word");
let inputNewWoRD = document.querySelector(".new-word");
let inputHint = document.querySelector("#hint");
let warningWordAdded = document.querySelector("#warning-word-add");


function mostraInicio (){
    inicioGame.setAttribute("class","main-inicio");
}

function escondeInicio() {
    inicioGame.setAttribute("class","main-inicio-none");
}

function mostraSectionAddWord() {
    sectionAddWord.setAttribute("class","all-containers-add");
}

function escondeSectionAddWord() {
    sectionAddWord.setAttribute("class","all-containers-add-none");
}

function goToAddWord(){
    escondeInicio();
    mostraSectionAddWord();
}

function goToIndex(){
    escondeSectionAddWord();
    mostraInicio();
    inputNewWoRD.value="";
    inputHint.value="";
}


btnGoAddWord.addEventListener("click", goToAddWord);
btnCancel.addEventListener("click", goToIndex);