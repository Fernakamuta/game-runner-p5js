class Animacao {
  constructor(matriz, imagem, x, propImagem, nLinhas, nColunas) {
    this.frameAtual = 0;
    this.imagem = imagem;
    this.matriz = matriz;

    this.larguraSprite = imagem.width / nColunas;
    this.alturaSprite = imagem.height / nLinhas;

    this.largura = this.larguraSprite * propImagem;
    this.altura = this.alturaSprite * propImagem;

    this.x = x;
    this.y = height - this.altura;

  }

  criarMatriz(nLinhas, nColunas) {
    this.matriz = [];
    console.log(nLinhas, nColunas)
    for (let coluna = 0; coluna < nColunas; coluna++) {
      for (let linha = 0; linha < nLinhas; linha++) {
        this.matriz.push([linha * this.larguraSprite, coluna * this.alturaSprite]);
      }
    }
  }

  exibe() {
    image(
      this.imagem,
      this.x,
      this.y,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.larguraSprite,
      this.alturaSprite
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