const iva = 1.21;
const margenGanancia = 1.3;

/* valor de precio de todos los articulos */

class producto {
    constructor(marca, nombre, precio) {
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
    }
}

const platoPlayoTsuji = new producto("tsuji", "Plato playo", Math.round(1800 * iva * margenGanancia))
const platoPlayoVerbano = new producto("verbano", "Plato playo", Math.round(1400 * iva * margenGanancia))
const platoPlayoCorona = new producto("corona", "Plato playo", Math.round(800 * iva * margenGanancia))
const platoPlayoBiona = new producto("biona", "Plato playo", Math.round(900 * iva * margenGanancia))

const platoOndoTsuji = new producto("tsuji", "Plato ondo", Math.round(1900 * iva * margenGanancia))
const platoOndoVerbano = new producto("verbano", "Plato ondo", Math.round(1450 * iva * margenGanancia))
const platoOndoCorona = new producto("corona", "Plato ondo", Math.round(850 * iva * margenGanancia))
const platoOndoBiona = new producto("biona", "Plato ondo", Math.round(950 * iva * margenGanancia))

const platoPostreTsuji = new producto("tsuji", "Plato postre", Math.round(1500 * iva * margenGanancia))
const platoPostreVerbano = new producto("verbano", "Plato postre", Math.round(1300 * iva * margenGanancia))
const platoPostreCorona = new producto("corona", "Plato postre", Math.round(650 * iva * margenGanancia))
const platoPostreBiona = new producto("biona", "Plato postre", Math.round(700 * iva * margenGanancia))

const platoTazaCafeTsuji = new producto("tsuji", "Plato postre", Math.round(1600 * iva * margenGanancia))
const platoTazaCafeVerbano = new producto("verbano", "Plato postre", Math.round(1350 * iva * margenGanancia))
const platoTazaCafeCorona = new producto("corona", "Plato postre", Math.round(700 * iva * margenGanancia))
const platoTazaCafeBiona = new producto("biona", "Plato postre", Math.round(800 * iva * margenGanancia))

/* hago una clase para armar el carrito y que tenga adentro la funciones que necesito que cuumpla */

class carrito {
    constructor() {
        this.productosElegidos = []
        this.total = 0
    }
    agregarProducto(producto) {
        this.productosElegidos.push(producto)
    }
    removerPrimerProducto() {
        this.productosElegidos.shift()
    }
    removerUltimoProducto() {
        this.productosElegidos.pop()
    }
    calcularTotal() {

    }
}