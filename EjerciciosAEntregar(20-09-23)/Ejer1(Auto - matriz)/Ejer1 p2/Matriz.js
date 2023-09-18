"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matriz = void 0;
var Matriz = /** @class */ (function () {
    function Matriz(filas, columnas) {
        var matriz = new Array(filas);
        for (var i = 0; i < filas; i++) {
            matriz[i] = new Array(columnas);
        }
        for (var i = 0; i < filas; i++) {
            for (var j = 0; j < columnas; j++) {
                matriz[i][j] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            }
        }
        this.matriz = matriz;
    }
    Matriz.prototype.getValor = function (x, y) {
        console.log("el valor en la posicion ".concat(x, ",").concat(y, " es: ").concat(this.matriz[x][y]));
    };
    Matriz.prototype.mostrarMatriz = function () {
        console.log('--------------------------');
        for (var i = 0; i < this.matriz.length; i++) {
            console.log(this.matriz[i].join(" | "));
        }
    };
    return Matriz;
}());
exports.Matriz = Matriz;
