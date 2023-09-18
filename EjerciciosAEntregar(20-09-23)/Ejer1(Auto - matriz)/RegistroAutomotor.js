"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var rls = require("readline-sync");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.registro = [];
    }
    RegistroAutomotor.prototype.darDeAlta = function (auto) {
        this.registro.push(auto);
        console.log('Se añadio su auto al registro');
    };
    RegistroAutomotor.prototype.eliminarAuto = function (patente) {
        for (var i = 0; i < this.registro.length; i++) {
            if (this.registro[i].getPatente() === patente) {
                this.registro.splice(i, 1);
                console.log("Se ha eliminado el vehiculo del registro");
                break;
            }
        }
    };
    RegistroAutomotor.prototype.buscarPatete = function (patente) {
        var esta = false;
        for (var i = 0; i < this.registro.length; i++) {
            if (this.registro[i].getPatente() === patente) {
                console.log("su auto con dominio ".concat(patente, " se encuentra en el registro"));
                esta = true;
                break;
            }
        }
        if (!esta) {
            console.log("su auto con dominio ".concat(patente, " no encuentra en el registro"));
        }
    };
    RegistroAutomotor.prototype.actualizarAuto = function (patente) {
        var esta = false;
        for (var i = 0; i < this.registro.length; i++) {
            if (this.registro[i].getPatente() === patente) {
                var duenio = rls.question("Ingrese el nombre del nuevo propietario: ");
                var marca = rls.question("Ingrese la nueva marca: ");
                this.registro[i].setDuenio(duenio);
                this.registro[i].setMarca(marca);
                console.log("su auto con dominio ".concat(patente, " se a actualizado"));
                esta = true;
                break;
            }
        }
        if (!esta) {
            console.log("Patente no valida, imposible actualizar");
        }
    };
    RegistroAutomotor.prototype.listarRegistro = function () {
        console.log("Lista de Automotores");
        console.log("----------------------------------------------------------");
        this.registro.forEach(function (auto, indice) {
            console.log("".concat(indice + 1, " - ").concat(auto.getMarca(), " -").concat(auto.getPatente(), " ").concat(auto.getDuenio()));
        });
        console.log();
        console.log();
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
