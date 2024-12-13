function exibirTexto(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p',"Escolha um número de 1 a 100");

let lista = [];

function gerarNumeroAleatorio() {
    let numero =  parseInt(Math.random()*100+1);
    let tamanhoLista = lista.length;

    if(tamanhoLista == 100){lista = [];}

    if(lista.includes(numero)){
        return gerarNumeroAleatorio();
    }else{
        lista.push(numero);
        return numero;
    }
}


let numSecreto = gerarNumeroAleatorio();
let cont = 1;


function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numSecreto){

        exibirTexto('h1',"Acertou!");
        let mensagem = cont > 1 ? `boa mlk, só ${cont} tentativas`:`boa mlk, só ${cont} tentativa`;
        exibirTexto('p', mensagem);
        document.getElementById("reiniciar").removeAttribute('disabled');

    } else {
        if(chute > numSecreto){
            exibirTexto("h1","Erouuu! :(");
            exibirTexto("p","O número secreto é MENOR")
        }else{
            exibirTexto("h1","Erouuu! :(");
            exibirTexto("p","O número secreto é MAIOR");
        }
        cont = cont + 1;
        chute = document.querySelector("input");
        chute.value = "";
    }
}

function reiniciarJogo(){
    numSecreto = gerarNumeroAleatorio();
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p',"Escolha um número de 1 a 100");
    document.querySelector("input").value = "";
    document.getElementById("reiniciar").setAttribute('disabled',true);
    cont=1;
}
