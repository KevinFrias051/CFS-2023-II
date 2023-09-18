"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cd = void 0;
var Cd = /** @class */ (function () {
    function Cd() {
        this.canciones = [];
        this.contador = 0;
    }
    Cd.prototype.contarCanciones = function () {
        this.contador = this.canciones.length;
        console.log("hay ".concat(this.contador, " canciones"));
        return this.contador;
    };
    Cd.prototype.mostarCancion = function (int) {
        if (int < this.canciones.length) {
            var thisSong = this.canciones[int];
            console.log("la cancion en la poscicion ".concat(int, " es: '").concat(this.canciones[int].mostrarTitulo(), "'"));
        }
        else {
            console.log("la poscicion '".concat(int, "' no es valida"));
        }
    };
    Cd.prototype.grabarCancion = function (int, cancion) {
        if (int <= this.canciones.length) {
            console.log("la cancion '".concat(this.canciones[int].mostrarTitulo(), "' se remplazo por '").concat(cancion.mostrarTitulo(), "'"));
            this.canciones[int] = cancion;
        }
        else {
            console.log("la poscicion '".concat(int, "' no es valida"));
        }
    };
    Cd.prototype.agregar = function (cancion) {
        this.canciones.push(cancion);
        console.log("la cancion '".concat(cancion.mostrarTitulo(), "' se agrego a su disco"));
        this.contador++;
    };
    Cd.prototype.eliminar = function (int) {
        console.log("la cancion '".concat(this.canciones[int].mostrarTitulo(), "' se eliminado a su disco"));
        this.canciones.splice(int, 1);
        this.contador++;
    };
    return Cd;
}());
exports.Cd = Cd;
