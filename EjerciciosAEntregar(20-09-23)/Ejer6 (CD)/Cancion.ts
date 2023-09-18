export class Cancion {

	private titulo: string;
	private autor: string;

	constructor(titulo?: string, autor?: string) {
		if (titulo && autor) {
			this.titulo = titulo;
			this.autor = autor;
		} else {
			this.titulo = "";
			this.autor = "";
		}
	}


	public mostrarTitulo(): string {
		//console.log(this.titulo);
		return this.titulo;
	}
	public mostrarAutor(): string {
		//console.log(this.autor);
		return this.autor;
	}

	public ponerTitulo(titulo: string): void {
		this.titulo = titulo;
	}

	public ponerAutor(autor: string): void {
		this.autor = autor;
	}

}