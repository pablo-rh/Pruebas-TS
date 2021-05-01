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


import { directory ,users} from "./index";

export interface IUser {
    encontrado(correo: string) : User;
}

export class User implements IUser {
    
    _id:string;
    _name:string;
    _dateBirth : string;
    _yearsOld : number;
    _actual: Date;

    constructor(id:string,name:string,lastname:string,dateB:string)
    {
        this._id = id;
        this._name = `${name} ${lastname}`;
        this._dateBirth = dateB;
        this._actual = new Date;
        this._yearsOld = this.edad();
    }

    edad():number{
        let fecha = this._dateBirth.split("/");
        let anio = parseInt(fecha[2]);
        let mes = parseInt(fecha[1]);
        let dia = parseInt(fecha[0]);
        let aniosC = 0;
        aniosC = this._actual.getFullYear() - (anio-1);
        if( (this._actual.getMonth() + 1)- mes >= 0)
        {
            if((this._actual.getDate()-dia >= 0)) {
                aniosC++;
            }
        }
        return aniosC;
    }
 

    encontrado(correo:string):User {
        let id: string = "no hay";
        let i: number = 0;
        let usuario:User = new User("","","","");

        do
        {   
            if(correo === directory[i].email)
                id = directory[i].id;
            i++;
        }while(i < directory.length && correo === directory[i].email);

        let j:number = 0;
        do
        {   
            if(id === users[j].id) {
                id = directory[i].id;
                usuario = new User(id,users[j].name,users[j].lastName,`${users[j].dayBirth}/${users[j].monthBirth}/${users[j].yearBirth}`);
            }
            j++;
        }while(j < users.length && id === users[j].id);
        return usuario;
    }
}
