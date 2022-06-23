const iva = 1.21;
const margenGanancia = 1.3;

/* constructor para todos los articulos */

class producto {
    constructor(id, marca, nombre, tipo, precio) {
        this.id = id
        this.marca = marca
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
    }
    mostrarProducto() {

    }
}

const platoPlayoTsuji1 = new producto(1, "tsuji", "plato playo", "plato", Math.round(1870 * iva * margenGanancia))
const platoPlayoTsuji2 = new producto(2, "tsuji", "plato playo", "plato", Math.round(1800 * iva * margenGanancia))
const platoPlayoTsuji3 = new producto(3, "tsuji", "plato playo", "plato", Math.round(1760 * iva * margenGanancia))
const platoPlayoVerbano1 = new producto(4, "verbano", "plato playo", "plato", Math.round(1450 * iva * margenGanancia))
const platoPlayoVerbano2 = new producto(5, "verbano", "plato playo", "plato", Math.round(1370 * iva * margenGanancia))
const platoPlayoVerbano3 = new producto(6, "verbano", "plato playo", "plato", Math.round(1430 * iva * margenGanancia))

const platoHondoTsuji1 = new producto(7, "tsuji", "plato hondo", "plato", Math.round(1890 * iva * margenGanancia))
const platoHondoTsuji2 = new producto(8, "tsuji", "plato hondo", "plato", Math.round(1950 * iva * margenGanancia))
const platoHondoTsuji3 = new producto(9, "tsuji", "plato hondo", "plato", Math.round(1870 * iva * margenGanancia))
const platoHondoVerbano1 = new producto(10, "verbano", "plato hondo", "plato", Math.round(1650 * iva * margenGanancia))
const platoHondoVerbano2 = new producto(11, "verbano", "plato hondo", "plato", Math.round(1600 * iva * margenGanancia))
const platoHondoVerbano3 = new producto(12, "verbano", "plato hondo", "plato", Math.round(1530 * iva * margenGanancia))

const platoPostreTsuji = new producto(13, "tsuji", "plato postre", "plato", Math.round(1300 * iva * margenGanancia))
const platoPostreVerbano = new producto(14, "verbano", "plato postre", "plato", Math.round(1150 * iva * margenGanancia))

const juegoCafeTsuji1 = new producto(15, "tsuji", "juego cafe", "juego de cafe", Math.round(2800 * iva * margenGanancia))
const juegoCafeTsuji2 = new producto(16, "tsuji", "juego cafe", "juego de cafe", Math.round(2600 * iva * margenGanancia))
const juegoCafeTsuji3 = new producto(17, "tsuji", "juego cafe", "juego de cafe", Math.round(2700 * iva * margenGanancia))
const juegoCafeVerbano1 = new producto(18, "verbano", "juego cafe", "juego de cafe", Math.round(2350 * iva * margenGanancia))
const juegoCafeVerbano2 = new producto(19, "verbano", "juego cafe", "juego de cafe", Math.round(2500 * iva * margenGanancia))
const juegoCafeVerbano3 = new producto(20, "verbano", "juego cafe", "juego de cafe", Math.round(2420 * iva * margenGanancia))

const descuentoTsuji = new producto(21, "tsuji", "juego completo", "set completo", 11050)
const descuentoVerbano = new producto(22, "tsuji", "juego completo", "set completo", 9556)

/* La uso para obtener precios de los distintos productos creados */

/* console.log(juegoCafeVerbano1.precio) */

/* tengo que hacer una lista con todos los productos para el buscador */

const listaProductos = [platoPlayoTsuji1,
    platoPlayoTsuji2,
    platoPlayoTsuji3,
    platoPlayoVerbano1,
    platoPlayoVerbano2,
    platoPlayoVerbano3,
    platoHondoTsuji1,
    platoHondoTsuji2,
    platoHondoTsuji3,
    platoHondoVerbano1,
    platoHondoVerbano2,
    platoHondoVerbano3,
    platoPostreTsuji,
    platoPostreVerbano,
    juegoCafeTsuji1,
    juegoCafeTsuji2,
    juegoCafeTsuji3,
    juegoCafeVerbano1,
    juegoCafeVerbano2,
    juegoCafeVerbano3,
    descuentoTsuji,
    descuentoVerbano
]

/* prueba de la lista*/
/* console.log(listaProductos.length)
console.log(listaProductos) */

/* Filtro */

/* creo todas las listas que voy a necesitar en la formula del buscador */

let filtroMarca = []
let filtroNombre = []
let filtroTipo = []
let lista1 = []
let listaProductosBuscados = []


function busquedaUsuario() {

    /* traigo valor */
    let busqueda = document.getElementById("busqueda").value;
    console.log(busqueda);
    /* silencio evento de reinicio de pagina */
    const form = document.getElementById("eventoFormulario")

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
    })
    /* uso el filtro para los tres tipos de datos que se pueden buscar */
    filtroMarca = listaProductos.filter((elemento) => {
        return elemento.marca === (busqueda.toLowerCase())
    })

    filtroNombre = listaProductos.filter((elemento) => {
        return elemento.nombre === (busqueda.toLowerCase())
    })

    filtroTipo = listaProductos.filter((elemento) => {
        return elemento.tipo === (busqueda.toLowerCase())
    })

    let lista1 = filtroMarca.concat(filtroNombre)
    let listaProductosBuscados = lista1.concat(filtroTipo)

    console.log(listaProductosBuscados)

}

/* Creo una funcion para aceptar solo pedidos menores o iguales a 24 unidades */

function pedidoCorrecto() {
    if (cantidadIngresada < 0 || cantidadIngresada > 24) {
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