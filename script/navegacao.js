
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
    inicioGame.classList.remove("main-inicio-none");
    inicioGame.classList.add("main-inicio");
}

function escondeInicio() {
    inicioGame.classList.add("main-inicio-none");
}

function mostraSectionAddWord() {
    sectionAddWord.classList.remove("all-containers-add-none");
    sectionAddWord.classList.add("all-containers-add");
}

function escondeSectionAddWord() {
    sectionAddWord.classList.remove("all-containers-add")
    sectionAddWord.classList.add("all-containers-add-none");
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

function mostraAvisoWordAdd(){
    warningWordAdded.classList.remove("aviso-palavra-adicionada-none");
    warningWordAdded.classList.add("aviso-palavra-adicionada");
}

btnGoAddWord.addEventListener("click", goToAddWord);
btnCancel.addEventListener("click", goToIndex);