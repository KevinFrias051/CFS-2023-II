export class Serie {

  private titulo: string;
  private anioDeEstreno: number;
  private episodios: number;
  private temporadas: number;
  private episodiosVistos: number;
  private finalizadaCancelada: boolean;

  constructor(titulo: string, anioDeEstreno: number, episodios: number, temporadas: number, finalizadaCancelada: boolean) {
    this.titulo = titulo;
    this.anioDeEstreno = anioDeEstreno;
    this.episodios = episodios;
    this.temporadas = temporadas;
    this.episodiosVistos = 0;
    this.finalizadaCancelada = finalizadaCancelada;
  }


  public verEpisodio(): void {
    if (this.episodiosVistos < this.episodios) {
      this.episodiosVistos++;
      console.log(`Has visto episodio de ${this.titulo}.`);
    } else {
      console.log(`Ya has visto todos los episodios de ${this.titulo}.`);
    }
  }

  public episodiosPorVer(): number {
    let episodiosVistos = (this.episodios - this.episodiosVistos);
    return episodiosVistos;
  }

  public serieVista(): void {
    if (this.episodiosVistos === this.episodios) {
      console.log('Has visto toda la serie')
    } else {
      console.log(`te faltan ${this.episodiosPorVer()} episodios para terminar la serie`)
    }
  }

  public toString() {
    console.log(`Estas viendo: ${this.titulo}, que se estreno en el año ${this.anioDeEstreno},\nLa cual cuenta con ${this.episodios} episodios repartidos en ${this.temporadas} temporadas.\nDe la cual has visto ${this.episodiosVistos} episodios. `)
  }

}





