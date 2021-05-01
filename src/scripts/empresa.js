"use strict";
/*
Objetos de tipo corrida con los siguientes atributos.
 - numeroCorrida. String
 - descripcionServicio. String
 - empresa. String
 - descripcionEmpresa: String
 - tienePromoción. Boolean. Deberá ir en true en caso de que una de las corridas web tenga lista de descuetos "listaDescuentos"
*/
exports.__esModule = true;
exports.Corrida = void 0;
var Corrida = /** @class */ (function () {
    function Corrida(numeroCorrida, descripcionServicio, empresa, descripcionEmpresa, tienePromoción) {
        this._numeroCorrida = numeroCorrida;
        this._descripcionServicio = descripcionServicio;
        this._empresa = empresa;
        this._descripcionEmpresa = descripcionEmpresa;
        this._tienePromoción = tienePromoción;
    }
    return Corrida;
}());
exports.Corrida = Corrida;
exports["default"] = Corrida;
