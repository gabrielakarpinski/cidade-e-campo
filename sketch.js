// o jogo campo e cidade é um jogo de entreterimento, o objetivo é chegar na linha de chegada antes dos adversários, quem chegar primeiro vence, as tecla para mover os prsonagens é, k, g, d, e. 

function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0,0 ,0];
let yJogador = [50,100, 150, 200,250, 300];
let jogador = ["🛻", "🚓", "🚕", "🚜",];
let teclas = ["k", "g", "d", "e"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  rect(0, 350, 400, 10);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " 𝓿𝓮𝓷𝓬𝓮𝓾!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}

