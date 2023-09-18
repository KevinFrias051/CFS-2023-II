"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(titulo, anioDeEstreno, episodios, temporadas, finalizadaCancelada) {
        this.titulo = titulo;
        this.anioDeEstreno = anioDeEstreno;
        this.episodios = episodios;
        this.temporadas = temporadas;
        this.episodiosVistos = 0;
        this.finalizadaCancelada = finalizadaCancelada;
    }
    Serie.prototype.verEpisodio = function () {
        if (this.episodiosVistos < this.episodios) {
            this.episodiosVistos++;
            console.log("Has visto episodio de ".concat(this.titulo, "."));
        }
        else {
            console.log("Ya has visto todos los episodios de ".concat(this.titulo, "."));
        }
    };
    Serie.prototype.episodiosPorVer = function () {
        var episodiosVistos = (this.episodios - this.episodiosVistos);
        return episodiosVistos;
    };
    Serie.prototype.serieVista = function () {
        if (this.episodiosVistos === this.episodios) {
            console.log('Has visto toda la serie');
        }
        else {
            console.log("te faltan ".concat(this.episodiosPorVer(), " episodios para terminar la serie"));
        }
    };
    Serie.prototype.toString = function () {
        console.log("Estas viendo ".concat(this.titulo, ", que se estreno en el a\u00F1o ").concat(this.anioDeEstreno, ",\nLa cual cuenta con ").concat(this.episodios, " episodios repartidos en ").concat(this.temporadas, " temporadas.\nDe la cual has visto ").concat(this.episodiosVistos, " episodios. "));
    };
    return Serie;
}());
exports.Serie = Serie;
