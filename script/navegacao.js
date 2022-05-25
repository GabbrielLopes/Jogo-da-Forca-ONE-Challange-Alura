
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


btnGoAddWord.addEventListener("click", goToAddWord);
btnCancel.addEventListener("click", goToIndex);