import { Cancion } from "./Cancion";
import { Cd } from "./CD";

let disco1 = new Cd();

let cancion1 = new Cancion('metal','literal');
let cancion2 = new Cancion('madera','fuego');
let cancion3 = new Cancion('dormir','siesta');
let cancion4 = new Cancion('mañana','ayer');
let cancion5 = new Cancion('chau','adio');


disco1.contarCanciones();

disco1.agregar(cancion1);
disco1.agregar(cancion2);
disco1.agregar(cancion3);
disco1.agregar(cancion4);

disco1.contarCanciones();

disco1.mostarCancion(0);
disco1.mostarCancion(1);
disco1.mostarCancion(2);
disco1.mostarCancion(3);
disco1.mostarCancion(4);
disco1.eliminar(1);
disco1.contarCanciones();
disco1.grabarCancion(2,cancion5);
console.log();
console.log(disco1);