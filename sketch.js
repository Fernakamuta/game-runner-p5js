let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/pokeflorest.jpg');
  imagemPersonagem = loadImage('imagens/personagem/red.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 10);
  personagem = new Personagem(imagemPersonagem, 64, 64, 4, 4, 3.5, 50);
  frameRate(15);
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}
