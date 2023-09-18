import { JuegoDeCasino } from "./juegoDeCasino";

export class Ruleta extends JuegoDeCasino {

    private fichaUsuario: number;

    public constructor(fichaUsuario: number) {
        super("Ruleta", 8, 100);
        this.fichaUsuario = 0;
    }

    public apuestaJugador(fichaUsuario: number) {
        if (fichaUsuario >= this.apuestaMinima) {
            console.log(`Que disfrute su juego`);
        } else {
            console.log(`Compra tus fichas`);
        }
    }



}