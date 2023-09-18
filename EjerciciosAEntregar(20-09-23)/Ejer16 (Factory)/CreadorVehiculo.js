"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creadorvehiculo = void 0;
var Creadorvehiculo = /** @class */ (function () {
    function Creadorvehiculo(marca, modelo, cantidadAsientos, capacidadCarga) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadAsientos = cantidadAsientos;
        this.capacidadCarga = capacidadCarga;
    }
    Creadorvehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Creadorvehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Creadorvehiculo.prototype.getCantidadDeAsientos = function () {
        return this.cantidadAsientos;
    };
    Creadorvehiculo.prototype.getCapacidadDeCarga = function () {
        return this.capacidadCarga;
    };
    return Creadorvehiculo;
}());
exports.Creadorvehiculo = Creadorvehiculo;
