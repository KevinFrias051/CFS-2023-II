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


	public mostrarTitulo(): void {
		console.log(this.titulo);
	}
	public mostrarAutor(): void {
		console.log(this.autor);
	}

	public ponerTitulo(titulo: string): void {
		this.titulo = titulo;
	}

	public ponerAutor(autor: string): void {
		this.autor = autor;
	}

}