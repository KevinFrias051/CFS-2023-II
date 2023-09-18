"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancion = void 0;
var Cancion = /** @class */ (function () {
    function Cancion(titulo, autor) {
        if (titulo && autor) {
            this.titulo = titulo;
            this.autor = autor;
        }
        else {
            this.titulo = "";
            this.autor = "";
        }
    }
    Cancion.prototype.mostrarTitulo = function () {
        //console.log(this.titulo);
        return this.titulo;
    };
    Cancion.prototype.mostrarAutor = function () {
        //console.log(this.autor);
        return this.autor;
    };
    Cancion.prototype.ponerTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Cancion.prototype.ponerAutor = function (autor) {
        this.autor = autor;
    };
    return Cancion;
}());
exports.Cancion = Cancion;
