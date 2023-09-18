import { Vehiculo } from "./Vehiculo";
export class Camioneta implements Vehiculo {
    arrancar() { 
        console.log('brum brum');
    }
  }