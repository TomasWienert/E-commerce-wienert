const iva = 1.21;
const margenGanancia = 1.3;

/* valor de precio de todos los articulos */

class producto {
    constructor(marca, nombre, precio) {
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
    }
    mostrarProducto() {

    }
}

const platoPlayoTsuji1 = new producto("tsuji", "Plato playo", Math.round(1870 * iva * margenGanancia))
const platoPlayoTsuji2 = new producto("tsuji", "Plato playo", Math.round(1800 * iva * margenGanancia))
const platoPlayoTsuji3 = new producto("tsuji", "Plato playo", Math.round(1760 * iva * margenGanancia))
const platoPlayoVerbano1 = new producto("verbano", "Plato playo", Math.round(1450 * iva * margenGanancia))
const platoPlayoVerbano2 = new producto("verbano", "Plato playo", Math.round(1370 * iva * margenGanancia))
const platoPlayoVerbano3 = new producto("verbano", "Plato playo", Math.round(1430 * iva * margenGanancia))

const platoHondoTsuji1 = new producto("tsuji", "Plato hondo", Math.round(1890 * iva * margenGanancia))
const platoHondoTsuji2 = new producto("tsuji", "Plato hondo", Math.round(1950 * iva * margenGanancia))
const platoHondoTsuji3 = new producto("tsuji", "Plato hondo", Math.round(1870 * iva * margenGanancia))
const platoHondoVerbano1 = new producto("verbano", "Plato hondo", Math.round(1650 * iva * margenGanancia))
const platoHondoVerbano2 = new producto("verbano", "Plato hondo", Math.round(1600 * iva * margenGanancia))
const platoHondoVerbano3 = new producto("verbano", "Plato hondo", Math.round(1530 * iva * margenGanancia))

const platoPostreTsuji = new producto("tsuji", "Plato postre", Math.round(1300 * iva * margenGanancia))
const platoPostreVerbano = new producto("verbano", "Plato postre", Math.round(1150 * iva * margenGanancia))

const juegoCafeTsuji1 = new producto("tsuji", "Juego cafe", Math.round(2800 * iva * margenGanancia))
const juegoCafeTsuji2 = new producto("tsuji", "Juego cafe", Math.round(2600 * iva * margenGanancia))
const juegoCafeTsuji3 = new producto("tsuji", "Juego cafe", Math.round(2700 * iva * margenGanancia))
const juegoCafeVerbano1 = new producto("verbano", "Juego cafe", Math.round(2350 * iva * margenGanancia))
const juegoCafeVerbano2 = new producto("verbano", "Juego cafe", Math.round(2500 * iva * margenGanancia))
const juegoCafeVerbano3 = new producto("verbano", "Juego cafe", Math.round(2420 * iva * margenGanancia))

let descuentoTsuji = new producto("tsuji", "Juego completo", 11050)
let descuentoVerbano = new producto("tsuji", "Juego completo", 9556)

/* La uso para obtener precios de los distintos productos creados */

/* console.log(juegoCafeVerbano1.precio) */

/* Creo una funcion para aceptar solo pedidos menores o iguales a 24 unidades */

function pedidoCorrecto () {
    if (cantidadIngresada < 0 && cantidadIngresada > 24) {
        alert("Ingresó un valor incorrecto, por favor coloque entre 1 y 24 unidades")
    }
}


/* hago una clase para armar el carrito y que tenga adentro la funciones que necesito que cumpla */

/* let usuario = prompt("Ingrese su nombre") */

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