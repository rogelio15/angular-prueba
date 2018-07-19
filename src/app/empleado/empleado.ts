export class Empleado{
    
    /*public nombre:string;
    public edad:number;


    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }*/

    //para definir un modelo mas sencillo seria
     constructor(public nombre:String, 
                 public edad:number, 
                 public cargo:string, 
                 public contratado:boolean){}

}