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




function addWord() {

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


    console.log(palavras);
}

btnAddWord.addEventListener('click', addWord);