let temas = document.querySelector("#theme");

let palavras = {
    objetos: ["MOUSE", "TECLADO", "CADEIRA", "HEADSET", "VIOLAO"],
    dicaObjetos: ["se usa no computador","se usa no computador","tem na cozinha","se usa para jogar","quem tem dó é?"],
    frutas: ["LARANJA,","ACEROLA","BANANA","TOMATE","MELANCIA"],
    dicaFrutas: ["é uma cor","coceira","macaco gosta","ketchup","magali"],
    veiculos: ["MAREA","UNO","CORSA","SONATA","POLO"],
    dicaVeiculos: ["carro bombastico","carro para toda obra","capotei o ?","hyundai","pega moço"],
    random: ["TRUCO","BACALHAU","CAFÉ","ALHO","VACA","VAMPIRO"],
    dicaRandom: ["pede 6","especie de peixe","tira sono","tempero","muuu","morcego"]
}

function verificaSeTemNumero(val){
    return !isNaN(val)
  }

let palavraArmazenada;
let = palavraEncontrada = false;
function validaPalavra(palavra){
    if(palavras.objetos.includes(palavra) || palavras.objetos.includes(palavra.toLowerCase())){
        palavraEncontrada = true;
        warningWordAdded.className = 'aviso-palavra-repetida';
        warningWordAdded.textContent = 'Erro, essa palavra já foi adicionada!';
        inputNewWord.value="";
        setTimeout(function(){  // setando tempo para proxima função, para dar tempo de ver o efeito da transição
            warningWordAdded.className = 'aviso-palavra-adicionada-none'
            warningWordAdded.textContent = "Palavra adicionada com sucesso!"
        }, 3000);
        return;
    } else {
        palavraEncontrada = false;
    } 
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
        palavras.objetos.push(palavraArmazenada);
        palavras.dicaObjetos.push(inputHint.value);
    } else if(temas.value == 'frutas'){
        palavras.frutas.push(palavraArmazenada);
        palavras.dicaFrutas.push(inputHint.value);
    } else if(temas.value == 'veiculo'){
        palavras.veiculos.push(palavraArmazenada);
        palavras.dicaVeiculos.push(inputHint.value);
    }else if(temas.value == 'random'){
        palavras.random.push(palavraArmazenada);
        palavras.dicaRandom.push(inputHint.value);
    }

    avisaPalavraAdicionada();
    inputNewWord.value="";
    
    console.log(palavras);
}

btnAddWord.addEventListener('click', addWord);
