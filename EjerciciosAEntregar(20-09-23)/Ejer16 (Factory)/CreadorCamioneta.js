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
exports.CreadorCamioneta = void 0;
var CreadorVehiculo_1 = require("./CreadorVehiculo");
var camioneta_1 = require("./camioneta");
var CreadorCamioneta = /** @class */ (function (_super) {
    __extends(CreadorCamioneta, _super);
    function CreadorCamioneta(marca, modelo, cantidadAsientos, capacidadCarga) {
        return _super.call(this, marca, modelo, cantidadAsientos, capacidadCarga) || this;
    }
    CreadorCamioneta.prototype.crearVehiculo = function () {
        return new camioneta_1.Camioneta();
    };
    return CreadorCamioneta;
}(CreadorVehiculo_1.Creadorvehiculo));
exports.CreadorCamioneta = CreadorCamioneta;
