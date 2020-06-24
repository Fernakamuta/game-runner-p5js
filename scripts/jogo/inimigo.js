class Inimigo extends Animacao {
  constructor(matriz, imagem, x, propImagem, nLinhas, nColunas) {
    super(matriz, imagem, x, propImagem, nLinhas, nColunas);
    this.velocidade = 15;
  }

  move() {
    this.x = this.x - 10

    if (this.x < -this.largura) {
      this.x = width
    }
  }
}