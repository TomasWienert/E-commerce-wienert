const iva = 1.21;
const margenGanancia = 1.3;

/* constructor para todos los articulos */

class producto {
    constructor(id, marca, nombre, tipo, precio, imagen) {
        this.id = id
        this.marca = marca
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
        this.imagen = imagen
    }

}
/* http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoPlayoTsuji1.jpg */

const platoPlayoTsuji1 = new producto(1, "tsuji", "plato playo", "plato", Math.round(1870 * iva * margenGanancia), "../imagenes/platoPlayoTsuji1.jpg")
const platoPlayoTsuji2 = new producto(2, "tsuji", "plato playo", "plato", Math.round(1800 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoPlayoTsuji2.jpg")
const platoPlayoTsuji3 = new producto(3, "tsuji", "plato playo", "plato", Math.round(1760 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoPlayoTsuji3.jpg")
const platoPlayoVerbano1 = new producto(4, "verbano", "plato playo", "plato", Math.round(1450 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoPlayoVerbano1.jpg")
const platoPlayoVerbano2 = new producto(5, "verbano", "plato playo", "plato", Math.round(1370 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoPlayoVerbano2.jpg")
const platoPlayoVerbano3 = new producto(6, "verbano", "plato playo", "plato", Math.round(1430 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoPlayoVerbano3.jpg")

const platoHondoTsuji1 = new producto(7, "tsuji", "plato hondo", "plato", Math.round(1890 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoHondoTsuji1.jpg")
const platoHondoTsuji2 = new producto(8, "tsuji", "plato hondo", "plato", Math.round(1950 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoHondoTsuji2.jpg")
const platoHondoTsuji3 = new producto(9, "tsuji", "plato hondo", "plato", Math.round(1870 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoHondoTsuji3.jpg")
const platoHondoVerbano1 = new producto(10, "verbano", "plato hondo", "plato", Math.round(1650 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoHondoVerbano1.jpg")
const platoHondoVerbano2 = new producto(11, "verbano", "plato hondo", "plato", Math.round(1600 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoHondoVerbano2.jpg")
const platoHondoVerbano3 = new producto(12, "verbano", "plato hondo", "plato", Math.round(1530 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoHondoVerbano3.jpg")

const platoPostreTsuji = new producto(13, "tsuji", "plato postre", "plato", Math.round(1300 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoPostreTsuji.jpg")
const platoPostreVerbano = new producto(14, "verbano", "plato postre", "plato", Math.round(1150 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/platoPostreVerbano.jpg")

const juegoCafeTsuji1 = new producto(15, "tsuji", "juego cafe", "juego de cafe", Math.round(2800 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/JuegoCafeTsuji1.jpg")
const juegoCafeTsuji2 = new producto(16, "tsuji", "juego cafe", "juego de cafe", Math.round(2600 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/JuegoCafeTsuji2.jpg")
const juegoCafeTsuji3 = new producto(17, "tsuji", "juego cafe", "juego de cafe", Math.round(2700 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/JuegoCafeTsuji3.jpg")
const juegoCafeVerbano1 = new producto(18, "verbano", "juego cafe", "juego de cafe", Math.round(2350 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/JuegoCafeVerbano1.jpg")
const juegoCafeVerbano2 = new producto(19, "verbano", "juego cafe", "juego de cafe", Math.round(2500 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/JuegoCafeVerbano2.jpg")
const juegoCafeVerbano3 = new producto(20, "verbano", "juego cafe", "juego de cafe", Math.round(2420 * iva * margenGanancia), "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/JuegoCafeVerbano3.jpg")

const descuentoTsuji = new producto(21, "tsuji", "juego completo", "set completo", 11050, "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/vajilla_tsuji.jpg")
const descuentoVerbano = new producto(22, "verbano", "juego completo", "set completo", 9556, "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/imagenes/vajilla_verbano.jpg")

/* tengo que hacer una lista con todos los productos */

const listaProductos = [
    platoPlayoTsuji1,
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
    juegoCafeVerbano3
]