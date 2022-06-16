// Variaveis
let palavras = [
    objetos = ["MOUSE", "TECLADO", "CADEIRA", "HEADSET", "VIOLAO"],
    frutas = ["LARANJA","ACEROLA","BANANA","TOMATE","MELANCIA"],
    veiculos = ["MAREA","UNO","CORSA","SONATA","POLO"],
    aleatorio = ["TRUCO","BACALHAU","CAFE","ALHO","VACA","BATMAN"]
];

let dicas = [
    objetos = ["se usa no computador","se usa no computador","tem na cozinha","se usa para jogar","quem tem dó é?"],
    frutas = ["é uma cor","coceira","macaco gosta","ketchup","magali"],
    veiculos = ["carro bombastico","carro para toda obra","capotei o ?","hyundai","pega moço"],
    aleatorio = ["pede 6","especie de peixe","tira sono","tempero","muuu","morcego"]
];
let letrasErradas = [];
let letrasPressionadas = [];
let letrasCorretas = [];
let palavraSorteada = "";
let dica = "";
let erros = 6;
let nomeDica = "";
let keyPress = "";
let hint = document.querySelector(".dica");
let todasLetras = document.querySelector(".todas-letras-pressionadas");

function sorteiaPalavra() {
    function sorteiaNumero(array) {
        return Math.floor(Math.random()*array)
    }

    dicaNumero = sorteiaNumero(palavras.length);
    numeroDaPalavra = sorteiaNumero(palavras[dicaNumero].length);
    palavraSorteada = palavras[dicaNumero][numeroDaPalavra];
    nomeDica = Object(dicas[dicaNumero][numeroDaPalavra]);
    dica = nomeDica.toUpperCase();
    hint.textContent = dica;
    //console.log(palavraSorteada);
    //console.log(dicaNumero);
    //console.log(dica);
}

palavras.forEach(function(temas) {
    //console.log(temas + " - " + palavras[temas]);
});
dicas.forEach(function(dicas) {
    //console.log(dicas + " - " + palavras[dicas]);
});


function startGame(){
    resetGame();
    goToGame();
    sorteiaPalavra();
    game();
    criaTracos();
}

// Fazer todos os botoes jogar executar as functions
    btnPlay[0].addEventListener("click", startGame);
    btnPlay[1].addEventListener("click", startGame);
    btnPlay[2].addEventListener("click", startGame);
  
    btnPlay[1].addEventListener("click", resetGame);
    btnPlay[1].addEventListener("click", goToGame);
    btnPlay[1].addEventListener("click", game);
    btnPlay[1].addEventListener("click", criaTracos);

 
    
function resetGame() {
    const dica = document.querySelector(".dica");
    if(palavraArmazenada !== ""){   // Validar se palavra nova foi adicionada para puxar ela como palavra sorteada direto
        palavraSorteada = palavraArmazenada;
        dica.textContent = dicaArmazenada;
    }
    const win = document.querySelector(".win");
    win.style.display = 'none';
    todasLetras.innerHTML = "";
    letrasErradas = [];
    letrasPressionadas = [];
    letrasCorretas = [];
    erros = 0;
    const partesCorpo = document.querySelectorAll(".partes-corpo");  // reseta corpo do boneco
    for(let i = 0; i < partesCorpo.length;i++){
        partesCorpo[i].style.display = 'none';
    }
}

function game(){
    const palavra = document.querySelector(".palavra");
    document.addEventListener("keydown", (evento) => {
        const codigo = evento.keyCode; // 65 A  - 90 Z
        if(isLetra(codigo)){

            let letra = evento.key;
            letra = letra.toUpperCase();
            keyPress = letra;
            if(erros < 6){
            if(!palavra.textContent.includes(palavraSorteada)){  // VALIDAR PALAVRA PARA O JOGO NÃO FUNCIONAR APÓS ACERTAR PALAVRA.
            if(letrasPressionadas.includes(letra)){
            } else {
                if(palavraSorteada.includes(letra)){
                    letrasCorretas.push(letra);
                    letrasPressionadas.push(letra);
                } else {
                    letrasPressionadas.push(letra);
                    letrasErradas.push(letra);
                    erros = erros + 1;
                }
            }
            atualizarJogo(evento); 
            }
            }
        }
    });
}

function atualizarJogo(evento){
    mostrarLetrasPressionadas(); 
    mostrarLetrasCertas(evento);
    desenhaForca();
    checarJogo();
}

function checarJogo(){
    const palavra = document.querySelector(".palavra");
    if(palavra.textContent.includes(palavraSorteada)){
        exibirVitoria();
    }else if (erros === 6){
        exibirDerrota();
    }
}

function exibirVitoria(){
    const win = document.querySelector(".win");
    const msgWin = document.querySelector(".msg-win");
    setTimeout(function() {
        msgWin.innerHTML = '';
        msgWin.innerHTML = '<div>Parabéns, você acertou!</div>';
        win.style.display = 'inherit';
    },300);
}

function exibirDerrota(){
    const win = document.querySelector(".win");
    const msgWin = document.querySelector(".msg-win");
    setTimeout(function() {
        msgWin.innerHTML = '';
        msgWin.innerHTML = '<div>Você perdeu!</div>';
        win.style.display = 'initial';
    },300);
}

function desenhaForca(){
    const partesCorpo = document.querySelectorAll(".partes-corpo");
    for(let i = 0; i < letrasErradas.length;i++){
        partesCorpo[i].style.display = "initial";
    }
}

function criaTracos(){
    let containerPalavra = document.querySelector(".palavra")
    containerPalavra.innerHTML = "";

    for(let i = 0;i < palavraSorteada.length;i++){
        let div = document.createElement("div");
        div.className = 'letras';
        containerPalavra.appendChild(div);
    }
}

function mostrarLetrasCertas(evento) {
    let letra = evento.key.toUpperCase();
    //console.log(letra);
    let letras = document.querySelectorAll(".letras");
    for(let i = 0;i < palavraSorteada.length;i++){
        letrasSeparadas = palavraSorteada.split("");
        if(letrasSeparadas[i] == letra){
           letras[i].textContent = letra;
        }
    
    };

}

function mostrarLetrasPressionadas() {
    todasLetras.textContent = letrasPressionadas.toString().replace(/,/g,"");
}

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}