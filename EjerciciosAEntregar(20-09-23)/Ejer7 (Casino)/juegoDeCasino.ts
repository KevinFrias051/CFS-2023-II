export class JuegoDeCasino {

    protected nombre: string;
    protected jugadores: number;
    protected apuestaMinima: number;



    public constructor(nombre: string, jugadores: number, apuestaMinima: number) {
        this.nombre = nombre;
        this.jugadores = jugadores;
        this.apuestaMinima = apuestaMinima;
    }

    public iniciarJuego() {
        console.log(`Bienvenido a ${this.nombre}, Puede empezar su apuesta.`);
    }

    public finalizarJuego() {
        console.log(`Muchas gracias por haber jugado a ${this.nombre}. Puede retirar su saldo`);

    }



}