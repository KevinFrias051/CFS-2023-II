import { Creadorvehiculo } from "./CreadorVehiculo"
import { Vehiculo } from "./Vehiculo"
import { Camioneta } from "./camioneta"
export class CreadorCamioneta extends Creadorvehiculo {
    
    constructor(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number){
        super(marca, modelo, cantidadAsientos, capacidadCarga)
    }

    crearVehiculo(): Vehiculo {
     return new Camioneta()
   }
 }