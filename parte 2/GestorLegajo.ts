/**
 * Definicion de la clase Alumno
 */
class Alumno {
    private nombre: string;
    private dni: number;
    private legajo: number;
    private notas: number[];

    public constructor(nombre: string, dni: number, legajo: number, notas: number[]) {
        this.nombre = nombre
        this.dni = dni
        this.legajo = legajo
        this.notas = notas
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getDni(): number {
        return this.dni;
    }

    public getLegajo(): number {
        return this.legajo;
    }
    
    public getNotas():number[]{
        return this.notas;
    }


    /**
     * Metodo que calcula el promedio de las notas del Alumno
     * @returns 
     */
    public getPromedio(): number {
        let promedio: number = 0;
        for (let index = 0; index < this.notas.length; index++) {
            promedio += this.notas[index];
        }
        promedio = promedio / this.notas.length;
        return promedio;
    }
}


/**
 * Definicion de la clase GestorLegajo
 */
class GestorLegajo {
    private alumnos: Alumno[];
    public constructor() {
        this.alumnos = [];
    }

    public darDeAlta(alumno: Alumno):void {
        this.alumnos.push(alumno);
    }

    /**
     * Metodo que busca un alumno por su numero de lejago y retorna su promedio
     * @param legajo 
     * @returns 
     */
    public promedioAlumno(legajo: number):number {
        let promedio: number = 0;
        for (let index = 0; index < this.alumnos.length; index++) {
            let alumnoActual = this.alumnos[index];
            if (alumnoActual.getLegajo() === legajo) {
                promedio = alumnoActual.getPromedio()
            }
        }
        return promedio;
    }

    /**
     * Metodo que retorna el promedio general de todos los alumnos
     * @returns 
     */
    public promedioGeneral(): number {
        let promedio:number=0;
        for (let index = 0; index < this.alumnos.length; index++) {
            let alumnoActual = this.alumnos[index];
            promedio += alumnoActual.getPromedio()
        }
        promedio = promedio/ this.alumnos.length;
        return promedio;
    }

}

//instanciamiento de la clase legajo
let legajo = new GestorLegajo();

//instanciamiento de la clase alumno
let juan = new Alumno('juan',44555666,25565,[5,6,7,8]);
let pedro = new Alumno('pedro',44555667,25566,[6,6,7,8]);
let maria = new Alumno('maria',4455567,25567,[5,9,7,8]);


legajo.darDeAlta(juan);
legajo.darDeAlta(pedro);
legajo.darDeAlta(maria);


console.log('prom alumno:', legajo.promedioAlumno(25565));
console.log('prom general:', legajo.promedioGeneral());


