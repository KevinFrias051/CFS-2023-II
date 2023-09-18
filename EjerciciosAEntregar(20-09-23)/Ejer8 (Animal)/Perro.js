"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
var Animal_1 = require("./Animal");
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, edad, raza, tamano) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tamaño = tamano;
        return _this;
    }
    Perro.prototype.hacer_sonido = function () {
        console.log('Guau* Guau*');
    };
    Perro.prototype.moverse = function () {
        console.log('se mueve*');
    };
    Perro.prototype.buscarObjeto = function (obj) {
        console.log("".concat(this.nombre, " encontro su ").concat(obj));
    };
    Perro.prototype.getTamañO = function () {
        return this.tamaño;
    };
    Perro.prototype.setTamañO = function (tamaño) {
        this.tamaño = tamaño;
    };
    return Perro;
}(Animal_1.Animal));
exports.Perro = Perro;
