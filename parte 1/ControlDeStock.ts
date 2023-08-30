/**
 * Definicion de la clase Producto
 */
class Producto {
    private id: number;
    private nombre: string;
    private precio: number;

    public constructor(id: number, nombre: string, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    public getId(): number {
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getPrecio(): number {
        return this.precio;
    }

}

/**
 * Definicion de la clase ListaDeProductos
 */
class ListaDeProductos {
    private listaStock: Producto[];
    private listaVenta: Producto[];

    public constructor() {
        this.listaStock = [];
        this.listaVenta = [];
    }
    
    /**
     * Agrega un producto al array de listaStock
     * @param item 
     */
    public agregarProductoStock(item: Producto): void {
        this.listaStock.push(item);
    }

    /**
     * Quita un producto del array de lista stock
     * @param id 
     */
    public quitarProductoStock(id: number): void {
        for (let index = 0; index < this.listaStock.length; index++) {
            if (this.listaStock[index].getId() == id) {
                this.listaStock.splice(index, 1);
                console.log('Su producto se elimino..');
                break;
            }
        }
    }

    /**
     * Agrega un producto a listaVenta y lo quita de listaStock
     * @param id 
     */
    public venderProducto(id: number): void {
        for (let index = 0; index < this.listaStock.length; index++) {
            if (this.listaStock[index].getId() == id) {
                this.listaVenta.push(this.listaStock[index]);
                this.listaStock.splice(index, 1);
                break;
            }
        }
    }

    /**
     * Imprime el array listaStock
     */
    public imprimirListaStock(): void {
        console.log('----------------------------------L I S T A  S T O C K----------------------------------');
        console.log('--|--ID--|--NOMBRE--|--PRECIO--|--CANTIDAD--')
        for (let index = 0; index < this.listaStock.length; index++) {
            let prActual = this.listaStock[index];
            console.log(`${index + 1} |-- ${prActual.getId()} --|----- ${prActual.getNombre()} -----|-- ${prActual.getPrecio()} --|`);
        }
        console.log();
    }

    /**
     * imprime el array listaVenta y el subtotal 
     */
    public imprimirListaVenta(): void {
        let suma: number = 0;
        console.log('----------------------------------L I S T A  V E N T A S----------------------------------');
        console.log('--|--ID--|--NOMBRE--|--PRECIO--|--CANTIDAD--')
        for (let index = 0; index < this.listaVenta.length; index++) {
            let prActual = this.listaVenta[index];
            console.log(`${index + 1} |-- ${prActual.getId()} --|----- ${prActual.getNombre()} -----|-- ${prActual.getPrecio()} --|`);

            suma += prActual.getPrecio();
        }
        console.log(`Su Total Es: $${suma}, Gracias Por Su Compra ☺ `);
        console.log();
    }
  
}

//instanciamiento de ListaDeProductos
let controlStock = new ListaDeProductos;

//instanciamiento de ListaDeProductos
let pinza = new Producto(1, 'pinza', 10.99);
let alicate = new Producto(2, 'alicate', 20.50);
let destornilladorX = new Producto(3, 'destornillador x', 5.25);

controlStock.agregarProductoStock(pinza);
controlStock.agregarProductoStock(alicate);
controlStock.agregarProductoStock(destornilladorX);
controlStock.agregarProductoStock(pinza);
controlStock.agregarProductoStock(alicate);
controlStock.agregarProductoStock(destornilladorX);

console.clear()

controlStock.imprimirListaStock();

controlStock.venderProducto(1);
controlStock.imprimirListaStock();
controlStock.imprimirListaVenta();





