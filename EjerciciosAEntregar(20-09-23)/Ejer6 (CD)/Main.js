"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cancion_1 = require("./Cancion");
var CD_1 = require("./CD");
var disco1 = new CD_1.Cd();
var cancion1 = new Cancion_1.Cancion('metal', 'literal');
var cancion2 = new Cancion_1.Cancion('madera', 'fuego');
var cancion3 = new Cancion_1.Cancion('dormir', 'siesta');
var cancion4 = new Cancion_1.Cancion('mañana', 'ayer');
var cancion5 = new Cancion_1.Cancion('chau', 'adio');
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
disco1.grabarCancion(2, cancion5);
console.log();
console.log(disco1);
