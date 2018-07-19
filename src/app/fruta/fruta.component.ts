import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{
    public nombre_component = 'Componente de fruta';
    public listado_frutas = 'Naranja, Pera, Sandia y Manzana';
    public nombre:string = 'Rogelio Zarate Mendez';
    public edad:number = 27;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero','Albañil','Fontanero']
    public trabajos1:Array<any> = ['Carpintero',43,'Fontanero'] //any acepta cualquier tipo de dato en un arreglo
    comodin:any = 35;
    comodin1:any = 'Cualquier cosa';

    //iniciamos con el constructor, asignamos valores desde el constructor.
    constructor(){
        console.log(this.comodin);
        console.log(this.trabajos);

        this.nombre = 'Rogelio Zárate';
        this.edad = 28;
        this.mayorDeEdad = true;
        this.comodin = 'Si';

    }
    //Método el cual se ejecuta al inicio para llamar algun método
    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad();
        //alert(this.nombre + " " + this.edad);
        console.log(this.nombre + " " + this.edad);

        //Variables y alcance
        var uno = 8;
        var dos = 15;

        if(uno == 8){
            let uno = 3;
            var dos = 88;

            console.log("Dentro del if " + uno + " " + dos)
        }

        console.log("Fuera del if " + uno)

    }

    cambiarNombre(){
        this.nombre = 'Rogelio Mendez';
    }

    cambiarEdad(){
        this.edad = 30;
    }

}