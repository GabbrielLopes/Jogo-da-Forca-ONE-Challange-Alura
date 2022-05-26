let temas = document.querySelector("#theme");

let palavras = {
    objetos: ["mouse","teclado","cadeira","headset","violao"],
    dicaObjetos: ["se usa no computador","se usa no computador","tem na cozinha","se usa para jogar","quem tem dó é?"],
    frutas: ["laranja,","acerola","banana","tomate","melancia"],
    dicaFrutas: ["é uma cor","coceira","macaco gosta","ketchup","magali"],
    veiculos: ["marea","uno","corsa","sonata","polo"],
    dicaVeiculos: ["carro bombastico","carro para toda obra","capotei o ?","hyundai","pega moço"],
    random: ["truco","bacalhau","café","alho","vaca","vampiro"],
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
    palavraArmazenada = inputNewWord.value;
    if(inputNewWord.value.length < 3 || verificaSeTemNumero(inputNewWord.value) ) {
        return;
    }
    
    validaPalavra(palavraArmazenada);
    if(palavraEncontrada){
        return;
    }
    
    let objetos = 0;
    let frutas = 1;
    let veiculo = 2;
    let aleatorio = 3;

    if(temas.value == objetos){
        palavras.objetos.push(inputNewWord.value);
        palavras.dicaObjetos.push(inputHint.value);
    } else if(temas.value == frutas){
        palavras.frutas.push(inputNewWord.value);
        palavras.dicaFrutas.push(inputHint.value);
    } else if(temas.value == veiculo){
        palavras.veiculos.push(inputNewWord.value);
        palavras.dicaVeiculos.push(inputHint.value);
    }else if(temas.value == aleatorio){
        palavras.random.push(inputNewWord.value);
        palavras.dicaRandom.push(inputHint.value);
    }

    avisaPalavraAdicionada();
    inputNewWord.value="";
    
    console.log(palavras);
}

btnAddWord.addEventListener('click', addWord);
