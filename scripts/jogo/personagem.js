class Personagem extends Animacao {
  constructor(matriz, imagem, x, propImagem, nLinhas, nColunas) {
    super(matriz, imagem, x, propImagem, nLinhas, nColunas);

    this.yInicial = height - this.alturaSprite * propImagem
    this.gravidade = 3;

    this.y = this.yInicial
    this.velocidadeDoPulo = 0;
    this.pulosSobrando = 2;
  }

  pula() {
    if (this.pulosSobrando >= 1) {
      somDoPulo.play();
      this.pulosSobrando = this.pulosSobrando - 1;
      this.velocidadeDoPulo = this.velocidadeDoPulo - 30;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.velocidadeDoPulo = 0;
      this.pulosSobrando = 2;
    }
  }

  estaColidindo(inimigo) {
    const precisao = 0.7
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao,
    )
    return colisao;
  }
}