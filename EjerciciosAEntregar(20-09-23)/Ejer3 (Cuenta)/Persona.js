"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, NroCta) {
        this.nombre = nombre;
        this.NroCta = NroCta;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getNroCta = function () {
        return this.NroCta;
    };
    return Persona;
}());
exports.Persona = Persona;
