"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuenta = void 0;
var cuenta = /** @class */ (function () {
    function cuenta(titular, saldo) {
        this.titular = titular;
        if (saldo) {
            this.saldo = saldo;
        }
        else {
            this.saldo = 0;
        }
    }
    cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    cuenta.prototype.mostrarCuenta = function () {
        console.log("Titular:".concat(this.titular.getNombre(), " | NroCta:").concat(this.titular.getNroCta(), " | $:").concat(this.getSaldo()));
    };
    cuenta.prototype.ingresarMonto = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log("Su deposito es de ".concat(monto, ", Su saldo actual es ").concat(this.saldo));
        }
        else {
            console.log('El monto ingresado es incorrecto');
        }
    };
    cuenta.prototype.retirarMonto = function (monto) {
        this.saldo -= monto;
        console.log("Su extraccion es de ".concat(monto, ", Su saldo actual es ").concat(this.saldo));
    };
    return cuenta;
}());
exports.cuenta = cuenta;
