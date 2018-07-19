import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({

    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
    
})

export class EmpleadoComponent{
    public titulo = 'Componente Empleados';
    public empleado:Empleado;
    //arreglo de tipo de datos empleado
    public trabajadores:Array<Empleado>
    public trabajador_externo:boolean;
    public color:string;

    constructor(){
        this.empleado = new Empleado('Pablito',27,'Devops',true);
        this.trabajadores = [
            new Empleado('Manolo Martinez',35,'Administrativo',false),
            new Empleado('Daniela',27,'Arquitecto',false),
            new Empleado('Lizzet',27,'Administrativo',true)
        ];

        this.trabajador_externo = true;
        this.color = 'yellow';
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores)
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

} 