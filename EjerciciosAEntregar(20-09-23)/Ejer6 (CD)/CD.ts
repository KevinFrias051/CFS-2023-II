import { Cancion } from "./Cancion";

export class Cd {
  private canciones: Cancion[];
  private contador: number;

  constructor() {
    this.canciones = [];
    this.contador = 0;
  }

  public contarCanciones(): number {
    this.contador = this.canciones.length;
    console.log(`hay ${this.contador} canciones`)
    return this.contador;
  }

  public mostarCancion(int: number): void {
    if (int < this.canciones.length) {
      let thisSong = this.canciones[int];
      console.log(`la cancion en la poscicion ${int} es: '${this.canciones[int].mostrarTitulo()}'`)
    } else {
      console.log(`la poscicion '${int}' no es valida`)
    }
  }

  public grabarCancion(int: number, cancion: Cancion): void {
    if (int <= this.canciones.length) {
      console.log(`la cancion '${this.canciones[int].mostrarTitulo()}' se remplazo por '${cancion.mostrarTitulo()}'`)
      this.canciones[int] = cancion;
    } else {
      console.log(`la poscicion '${int}' no es valida`)
    }
  }

  public agregar(cancion: Cancion): void {
    this.canciones.push(cancion);
    console.log(`la cancion '${cancion.mostrarTitulo()}' se agrego a su disco`);
    this.contador++;
  }

  public eliminar(int: number): void {
    console.log(`la cancion '${this.canciones[int].mostrarTitulo()}' se eliminado a su disco`);
    this.canciones.splice(int, 1);
    this.contador++;
  }

}