/*
    pedra x papel => papel
    pedra x tesoura => tesoura
    pedra x pedra => empate

    papel x tesoura => tesoura
    papel x papel => empate

    tesoura x tesoura => empate
*/ 

// DECLARAÇÃO DE VÁRIAVEIS

const nomePlayer = document.getElementById("nome-player");
let nomeJogador = "";
const textoP = document.getElementById("escolha-player");
const textoC = document.getElementById("escolha-cpu");
let escolhaP = "";
let escolhaC = "";
let imagemPlayer = document.getElementById("imagem-player");
let imagemCpu = document.getElementById("imagem-cpu")
let listaOpcoes = ["Pedra", "Papel", "Tesoura"];
let informacaoClick = 0;



// CRIANDO AS FUNÇÕES

function escolhaComputador(array){ 
    let elemento = Math.floor(Math.random() * array.length);
    return array[elemento];
}

function salvarNomePlayer(){
    nomeJogador = nomePlayer.value
    console.log(`Nome: ${nomeJogador} salvo!`);
}


function trocarImagemCpu(escolha){
    if(escolha === "Pedra"){
        imagemCpu.src = "assets/img/imagens-jogo/flork-pedra.png";
        escolhaC = "Pedra";
    }
    else if(escolha === "Papel"){
        imagemCpu.src = "assets/img/imagens-jogo/flork-papel.png";
        escolhaC = "Papel";
    }
    else if(escolha === "Tesoura"){
        imagemCpu.src = "assets/img/imagens-jogo/flork-tesoura.png";
        escolhaC = "Tesoura";
    }
    else{
        imagemCpu.src = "assets/img/interrogacao.jpg";
    }
}

function trocarImagemPlayer(escolha){
    if(escolha === "Pedra"){
        imagemPlayer.src = "assets/img/imagens-jogo/flork-pedra.png";
        escolhaP = "Pedra";
    }
    else if(escolha === "Papel"){
        imagemPlayer.src = "assets/img/imagens-jogo/flork-papel.png";
        escolhaP = "Papel";
    }
    else if(escolha === "Tesoura"){
        imagemPlayer.src = "assets/img/imagens-jogo/flork-tesoura.png"
        escolhaP = "Tesoura";
    }
    else{ 
        imagemPlayer.src = "assets/img/interrogacao.jpg";
    }
}

function textPlayer(){
    textoP.textContent = `${nomeJogador} escolheu ${escolhaP}.`;
}

function textCpu(){
    textoC.textContent = `Computador escolheu ${escolhaC}.`;
}

function comparacoes(num){
    if(num === 1){
        if(escolhaP === "Pedra" && escolhaC === "Papel"){
            alert("O computador ganhou!");
        } else if(escolhaP === "Pedra" && escolhaC === "Tesoura"){
            alert(`${nomePlayer.value} ganhou!`);
        } else if(escolhaP === "Papel" && escolhaC === "Pedra"){
            alert(`${nomePlayer.value} ganhou!`);
        } else if(escolhaP === "Papel" && escolhaC === "Tesoura"){
            alert("O computador ganhou!");
        } else if(escolhaP === "Tesoura" && escolhaC === "Pedra"){
            alert("O computador ganhou!");
        } else if(escolhaP === "Tesoura" && escolhaC === "Papel"){
            alert(`${nomePlayer.value} ganhou!`);
        } else {
            alert("Empate!");
        }
    }
}

function rodarFuncoes(){
    let escolhaCpu = escolhaComputador(listaOpcoes);
    console.log(`Elemento: ${escolhaCpu}`);
    trocarImagemCpu(escolhaCpu);
    textCpu();
    comparacoes(informacaoClick);
}

document.getElementById('pedra').addEventListener('click', function() {
    trocarImagemPlayer('Pedra');
    console.log('Pedra escolhida');
    textPlayer();
    informacaoClick = 1;
    rodarFuncoes();
});

document.getElementById('papel').addEventListener('click', function() {
    trocarImagemPlayer('Papel');
    console.log('Papel escolhido');
    textPlayer();
    informacaoClick = 1;
    rodarFuncoes();
});

document.getElementById('tesoura').addEventListener('click', function() {
    trocarImagemPlayer('Tesoura');
    console.log('Tesoura escolhida');
    textPlayer();
    informacaoClick = 1;
    rodarFuncoes();
    
});



