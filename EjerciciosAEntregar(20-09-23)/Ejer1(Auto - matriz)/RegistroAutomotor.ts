import { Auto } from "./Auto";
import * as rls from 'readline-sync';

export class RegistroAutomotor {
    private registro: Auto[];

    constructor() {
        this.registro = [];
    }


    public darDeAlta(auto: Auto): void {
        this.registro.push(auto);
        console.log('Se añadio su auto al registro')
    }

    public eliminarAuto(patente: string): void {
        for (let i = 0; i < this.registro.length; i++) {
            if (this.registro[i].getPatente() === patente) {
                this.registro.splice(i, 1)
                console.log("Se ha eliminado el vehiculo del registro")
                break;
            }
        }
    }

    public buscarPatete(patente: string): void {
        let esta: boolean = false;
        for (let i = 0; i < this.registro.length; i++) {
            if (this.registro[i].getPatente() === patente) {
                console.log(`su auto con dominio ${patente} se encuentra en el registro`);
                esta = true;
                break;
            }
        }
        if (!esta) {
            console.log(`su auto con dominio ${patente} no encuentra en el registro`);
        }
    }

    public actualizarAuto(patente:string): void {
        let esta: boolean = false;
        for (let i = 0; i < this.registro.length; i++) {
            if (this.registro[i].getPatente() === patente) {
								let duenio:string = rls.question("Ingrese el nombre del nuevo propietario: ");
								let marca:string = rls.question("Ingrese la nueva marca: ");
                this.registro[i].setDuenio(duenio)
								this.registro[i].setMarca(marca)
                console.log(`su auto con dominio ${patente} se a actualizado`);
                esta = true;
                break;
            }
        }
        if (!esta) {
            console.log(`Patente no valida, imposible actualizar`);
        }
    }

    public listarRegistro(): void {
        console.log("Lista de Automotores")
        console.log("----------------------------------------------------------")
        this.registro.forEach((auto: Auto, indice: number) => {
            console.log(`${indice + 1} - ${auto.getMarca()} - ${auto.getPatente()} - ${auto.getDuenio()}`);
        });
        console.log();
        console.log();
    }
}






