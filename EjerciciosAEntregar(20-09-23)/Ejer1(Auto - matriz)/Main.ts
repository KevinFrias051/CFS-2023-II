import { Auto } from "./Auto";
import { RegistroAutomotor } from "./RegistroAutomotor";

let registro = new RegistroAutomotor;


let auto1 = new Auto("Ford","Lucas","Aa654SC");
let auto2 = new Auto("Ferrari","Franco","Aa654SB");
let auto3 = new Auto("Ford","Kevin","AC789SC");
let auto4 = new Auto("Lamborghini","Ayelen","Aj654SC");
let auto5 = new Auto("Buggati","Mario","Aa654SC");

registro.darDeAlta(auto1);
registro.darDeAlta(auto2);
registro.darDeAlta(auto3);
registro.darDeAlta(auto4);
registro.darDeAlta(auto5);

console.log ("------------------------");
registro.listarRegistro();
console.log ("--------------------------");
registro.eliminarAuto("Aa654SC");
console.log ("--------------------------");
registro.actualizarAuto("AC789SC");
console.log ("--------------------------");
registro.buscarPatete("Aa654SB");
console.log ("--------------------------");
registro.buscarPatete("Aa654iB");
console.log ("--------------------------");
registro.listarRegistro();


