let listaDeNumerosSorteados = [];
let numeroMinimo = 1;
let NumeroMaximo = 100;
let numeroSecreto = getRandomIntInclusive(numeroMinimo, NumeroMaximo);
let tentativa = 1;
let palavraTentativa = '';
console.log(numeroSecreto);
exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextoTela('h1','Jogo do Número Secreto' );
    exibirTextoTela('p','Escolha um número entre um 1 e 100');
}
function exibirTextoTela(tag, texto){
    let campo = document.querySelector(`${tag}`);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numeroEscolhido = Math.floor(Math.random() * (max - min + 1)) + min;
    let quantidadeElementosdaLista = listaDeNumerosSorteados.length;
    if (quantidadeElementosdaLista == NumeroMaximo){
        listaDeNumerosSorteados = [];   
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return getRandomIntInclusive(numeroMinimo,NumeroMaximo);
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);//.pop() => excli o último elemente.
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
     if (chute == numeroSecreto){
        exibirTextoTela('h1','Acertou!!' );
        let palavraTentativa = tentativa == 1 ? 'tentativa'  : 'tentativas';
        let mensagemTentativa = `Parabéns, você acertou o número secreto em ${tentativa} ${palavraTentativa}!!`;
        exibirTextoTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
     }else{
        if (chute > numeroSecreto){
            exibirTextoTela('p','O número secreto é menor.' );
        }else{
            exibirTextoTela('p','O número secreto é maior.' );
        }
        tentativa++;
        limparCampo();
     }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = getRandomIntInclusive(numeroMinimo,NumeroMaximo);
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
