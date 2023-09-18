"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaAutomotris = void 0;
var CreadorAuto_1 = require("./CreadorAuto");
var CreadorCamioneta_1 = require("./CreadorCamioneta");
var FabricaAutomotris = /** @class */ (function () {
    function FabricaAutomotris() {
    }
    FabricaAutomotris.prototype.crearVehiculo = function (tipoVehiculo, marca, modelo, cantidadAsientos, capacidadCarga) {
        var v;
        if (tipoVehiculo == "auto") {
            var creaAuto = new CreadorAuto_1.CreadorAuto(marca, modelo, cantidadAsientos, capacidadCarga);
            v = creaAuto.crearVehiculo();
            console.log("Se ha creado un auto de marca ".concat(marca, ", modelo ").concat(modelo, ", con ").concat(cantidadAsientos, " asientos y capacidad de carga de ").concat(capacidadCarga, " kg."));
            return v;
        }
        else if (tipoVehiculo == "camioneta") {
            var creaCamioneta = new CreadorCamioneta_1.CreadorCamioneta(marca, modelo, cantidadAsientos, capacidadCarga);
            v = creaCamioneta.crearVehiculo();
            console.log("Se ha creado una camioneta de marca ".concat(marca, ", modelo ").concat(modelo, ", con ").concat(cantidadAsientos, " asientos y capacidad de carga de ").concat(capacidadCarga, " kg."));
            return v;
        }
    };
    return FabricaAutomotris;
}());
exports.FabricaAutomotris = FabricaAutomotris;
