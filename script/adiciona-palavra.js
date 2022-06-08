let temas = document.querySelector("#theme");

function verificaSeTemNumero(val){

    for(var i = 0;i < val.length;i++){
        if(!isNaN(val[i])){
            temNumero = true;
        } else {
            temNumero = false;
        }
    }
    return Boolean(temNumero);
  }

let palavraArmazenada;
let = palavraEncontrada = false;
function validaPalavra(palavra){
    for(let tema = 0;tema < palavras.length;tema++) {
        for(let nome = 0;nome < palavras[tema].length;nome++) {
            if(palavras[tema][nome].includes(palavraArmazenada)){
                palavraEncontrada = true;
                console.log("Palavra encontrada!");
                avisaPalavraRepetida();
                return;
            } else {
                console.log("Palavra disponível!");
                palavraEncontrada = false;
            } 
        };
    };
}


function avisaPalavraRepetida() {
    warningWordAdded.className = 'aviso-palavra-adicionada-none'
    warningWordAdded.className = 'aviso-palavra-repetida';
    warningWordAdded.textContent = 'Erro, essa palavra já foi adicionada!';
    inputNewWord.value="";
    setTimeout(function(){  // setando tempo para proxima função, para dar tempo de ver o efeito da transição
        warningWordAdded.className = 'aviso-palavra-adicionada-none'
        warningWordAdded.textContent = "Palavra adicionada com sucesso!"
    }, 3000);
}

function avisaPalavraAdicionada() {
    warningWordAdded.className = 'aviso-palavra-adicionada'
    setTimeout(function(){  // setando tempo para proxima função, para dar tempo de ver o efeito da transição
        warningWordAdded.className = 'aviso-palavra-adicionada-none'
    }, 3000);
}

function addWord() {
    palavraArmazenada = inputNewWord.value.toUpperCase();
    if(palavraArmazenada.length < 3 || verificaSeTemNumero(inputNewWord.value)) {
        return;
    }
    
    validaPalavra(palavraArmazenada);
    if(palavraEncontrada){
        return;
    }
    
    if(temas.value == 'objetos'){
        objetos = 0
        frutas = 1
        veiculos = 2
        aleatorio = 3
        palavras[objetos].push(palavraArmazenada);
        dicas[objetos].push(inputHint.value);
    } else if(temas.value == 'frutas'){
        palavras[frutas].push(palavraArmazenada);
        dicas[frutas].push(inputHint.value);
    } else if(temas.value == 'veiculo'){
        palavras[veiculos].push(palavraArmazenada);
        dicas[veiculos].push(inputHint.value);
    }else if(temas.value == 'random'){
        palavras[aleatorio].push(palavraArmazenada);
        dicas[aleatorio].push(inputHint.value);
    }

    avisaPalavraAdicionada();
    inputNewWord.value="";
    inputHint.value="";
    
    console.log(palavras);
    
}

btnAddWord.addEventListener('click', addWord);
