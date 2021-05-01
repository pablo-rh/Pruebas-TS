/*
Objetos de tipo corrida con los siguientes atributos.
 - numeroCorrida. String
 - descripcionServicio. String
 - empresa. String
 - descripcionEmpresa: String
 - tienePromoción. Boolean. Deberá ir en true en caso de que una de las corridas web tenga lista de descuetos "listaDescuentos"
*/

export class Corrida {
    _numeroCorrida: string;
    _descripcionServicio: string;
    _empresa:string;
    _descripcionEmpresa:string;
    _tienePromoción:boolean;

    constructor(numeroCorrida:string,descripcionServicio: string,empresa:string,descripcionEmpresa:string,tienePromoción:boolean,) {
        this._numeroCorrida = numeroCorrida;
        this._descripcionServicio = descripcionServicio;
        this._empresa = empresa;
        this._descripcionEmpresa = descripcionEmpresa;
        this._tienePromoción = tienePromoción;
    }

} 

export default Corrida;