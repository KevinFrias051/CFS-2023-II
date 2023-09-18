import { Creadorvehiculo } from "./CreadorVehiculo"
import { Vehiculo } from "./Vehiculo"
import { Auto } from "./auto"

export class CreadorAuto extends Creadorvehiculo {

    constructor(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number){
        super(marca, modelo, cantidadAsientos, capacidadCarga)
    }
    
    crearVehiculo(): Vehiculo {
        return new Auto()
    }
}