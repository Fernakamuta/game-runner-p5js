class Personagem {
  constructor(imagem, spriteWidth, spriteHeight, nColunas, nLinhas, sizeRate=0.5, dx=0) {
    this.imagem = imagem;
    this.sizeRate = sizeRate
    this.frameAtual = 0;
    this.dx = dx;

    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.nColunas = nColunas;
    this.nLinhas = nLinhas;

    this.criarMatriz();
  }

  criarMatriz() {
    this.matriz = [];
    for (let coluna = 0; coluna < this.nColunas; coluna++) {
      for (let linha = 0; linha < this.nLinhas; linha++) {
        if (coluna == 2) {
          this.matriz.push([linha * this.spriteWidth, coluna * this.spriteHeight]);
        }
      }
    }
  }

  exibe() {
    console.log(this.matriz)
    image(
      this.imagem,
      this.dx,
      height - this.spriteHeight * this.sizeRate,
      this.spriteWidth * this.sizeRate,
      this.spriteHeight * this.sizeRate,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.spriteWidth,
      this.spriteHeight
    );
    this.anima();
  }

  anima() {
    this.frameAtual++
    if (this.frameAtual > this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}