"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorClub = void 0;
var fs = require("fs");
var path = require("path");
var rls = require("readline-sync");
var jugador_1 = require("./jugador");
var GestorClub = /** @class */ (function () {
    function GestorClub(nombreDelClub) {
        this.path = path.resolve("./legajoSocios.json");
        this.nombreDelClub = nombreDelClub;
        this.sociosDelClub = [];
    }
    GestorClub.prototype.guardarInformacion = function (socio) {
        var fileDescriptor = fs.openSync(this.path, 'a');
        try {
            fs.writeFileSync(fileDescriptor, ",".concat(JSON.stringify([socio]), "\n"));
        }
        catch (error) {
            console.error("Error al escribir en el archivo:", error);
        }
        finally {
            fs.closeSync(fileDescriptor); // Cierra el archivo
        }
    };
    GestorClub.prototype.altaDeSocio = function () {
        var nombre = rls.question("Ingrese el nombre del socio: ");
        var apellido = rls.question("Ingrese el apellido del socio: ");
        var fechaNaciomiento = rls.question("Ingrese el fecha de nacimiento del socio: ");
        var documento = rls.question("Ingrese el documento del socio: ");
        var telefono = rls.question("Ingrese el telefono del socio: ");
        var miembroDesde = rls.question("Ingrese el miembro desde: ");
        this.guardarInformacion(new jugador_1.Jugador(nombre, apellido, fechaNaciomiento, documento, telefono, miembroDesde));
    };
    return GestorClub;
}());
exports.GestorClub = GestorClub;
