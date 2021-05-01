"use strict";
/*Crear una clase llamada User que implemente una interface llamada IUser con una funcion que devuelva un objeto usuario.

La funcion debe tener las siguientes consideraciones.
* Recibir como parametro un correo.
* Buscar en la constante directory el correo y devolver el id.
* Con el id que se haya obtenido de la constante directory. Buscar en la constante users el usurio con ese mismo id.
* El objeto user debe contener los siguienres atributos
- id
- name. name + lastName
- dateBirth. en formato dd/mm/yyyy
- yearsOld. Calcular a partir de la fecha, del día, del mes y del año de nacimiento */
exports.__esModule = true;
exports.User = void 0;
var index_1 = require("./index");
var User = /** @class */ (function () {
    function User(id, name, lastname, dateB) {
        this._id = id;
        this._name = name + " " + lastname;
        this._dateBirth = dateB;
        this._actual = new Date;
        this._yearsOld = this.edad();
    }
    User.prototype.edad = function () {
        var fecha = this._dateBirth.split("/");
        var anio = parseInt(fecha[2]);
        var mes = parseInt(fecha[1]);
        var dia = parseInt(fecha[0]);
        var aniosC = 0;
        aniosC = this._actual.getFullYear() - (anio - 1);
        if ((this._actual.getMonth() + 1) - mes >= 0) {
            if ((this._actual.getDate() - dia >= 0)) {
                aniosC++;
            }
        }
        return aniosC;
    };
    User.prototype.encontrado = function (correo) {
        var id = "no hay";
        var i = 0;
        var usuario = new User("", "", "", "");
        do {
            if (correo === index_1.directory[i].email)
                id = index_1.directory[i].id;
            i++;
        } while (i < index_1.directory.length && correo === index_1.directory[i].email);
        var j = 0;
        do {
            if (id === index_1.users[j].id) {
                id = index_1.directory[i].id;
                usuario = new User(id, index_1.users[j].name, index_1.users[j].lastName, index_1.users[j].dayBirth + "/" + index_1.users[j].monthBirth + "/" + index_1.users[j].yearBirth);
            }
            j++;
        } while (j < index_1.users.length && id === index_1.users[j].id);
        return usuario;
    };
    return User;
}());
exports.User = User;
