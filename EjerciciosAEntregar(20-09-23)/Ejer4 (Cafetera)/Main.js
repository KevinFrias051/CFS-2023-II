"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cafetera_1 = require("./Cafetera");
var cafetera1 = new Cafetera_1.Cafetera();
cafetera1.mostrarCafetera();
var cafetera2 = new Cafetera_1.Cafetera(1200);
cafetera2.mostrarCafetera();
var cafetera3 = new Cafetera_1.Cafetera(1000, 1500);
cafetera3.mostrarCafetera();
cafetera1.llenarCafetera();
cafetera1.servirTaza(300);
cafetera1.servirTaza(300);
console.log(cafetera1);
cafetera1.agregarCafe(800);
console.log(cafetera1);
cafetera1.vaciarCafetera();
cafetera1.servirTaza(300);
cafetera1.mostrarCafetera();
cafetera1.agregarCafe(200);
cafetera1.servirTaza(300);
