/* creo todas las listas que voy a necesitar en la formula del buscador */

let filtroMarca = []
let filtroNombre = []
let filtroTipo = []
let lista1 = []
let listaProductosBuscados = []
let carrito = []

/* funcion para poner los articulos que correspondan en la pagina, se usará lo mismo para el buscador */

let contenedorProductos = document.getElementById("contenedorProductos")
let mostrarProductos = document.getElementById("mostrarProductos")
let botonAgregarCarritoTsujiCompleto = document.getElementById("botonAgregarCarritoTsujiCompleto")
let botonAgregarCarritoVerbanoCompleto = document.getElementById("botonAgregarCarritoVerbanoCompleto")
let paginaVajilla = window.location.href
let productosCarrito = document.getElementById("productosCarrito")

if (paginaVajilla == "https://tomaswienert.github.io/E-commerce-wienert/pages/vajilla.html" || paginaVajilla == "http://127.0.0.1:5500/JavaScript/trabajo-practico/tienda-virtual/pages/vajilla.html") {

    /* Coloco los precios de los juegos completos */

    let precioTsujiCompleto = document.getElementById("precioTsujiCompleto")
    let precioVerbanoCompleto = document.getElementById("precioVerbanoCompleto")
    let precioT = document.createElement("p")
    precioT.innerHTML = ` $ ${descuentoTsuji.precio}`
    precioTsujiCompleto.append(precioT)
    let precioV = document.createElement("p")
    precioV.innerHTML = ` $ ${descuentoVerbano.precio}`
    precioVerbanoCompleto.append(precioV)

    /* idea a futuro comprar por cantidades */
    /* <input id="" class="" type="text" placeholder="Cantidad max. 24 uds"> */

    /* creo con DOM los productos en el html */

    function creaHtmlProductos() {
        listaProductos.forEach((producto) => {
            const div = document.createElement("div")
            div.classList.add("col-md-4")
            div.innerHTML = `
        <div class= "centradoHorizontal">
            <img src=${producto.imagen} class="pt-3 img-fluid">
            <h3 class="fuenteProductos pt-2">${producto.nombre.toUpperCase() + " " + producto.marca.toUpperCase()}</h3>
            <h3 class="precioPagina py-1">${" $ " + producto.precio}</h3>
            
            <button id="agregar${producto.id}" class="btn btn-outline-success my-3">Agregar al carrito</button>
        </div>`

            mostrarProductos.append(div)

            const botonAgregarCarrito = document.getElementById(`agregar${producto.id}`)

            botonAgregarCarrito.addEventListener("click", () => {
                agregarAlCarrito(producto.id)
            })
        })
    }

    creaHtmlProductos()

    /* para agregar juego entero con descuento */

    botonAgregarCarritoVerbanoCompleto.addEventListener("click", function () {
        carrito.push(descuentoVerbano)
        alert("Agregaste " + descuentoVerbano.nombre + " " + descuentoVerbano.marca + " al carrito")
        console.log(carrito)
        productosCarrito.innerHTML = ""
        mostrarCarrito()
    })

    botonAgregarCarritoTsujiCompleto.addEventListener("click", function () {
        carrito.push(descuentoTsuji)
        alert("Agregaste " + descuentoTsuji.nombre + " " + descuentoTsuji.marca + " al carrito")
        console.log(carrito)
        productosCarrito.innerHTML = ""
        mostrarCarrito()
    })


    /* Filtro */

    let botonBuscar = document.getElementById("botonBuscar")


    botonBuscar.onclick = () => {
        busquedaUsuario( /* mostrarProductos */ )

    }

    function busquedaUsuario( /* mostrarProductos */ ) {

        /* borro los productos que mostraba inicialmente */

        mostrarProductos.innerHTML = ``

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

        /* creo una unica lista con el resultado de la busqueda */
        
        let lista1 = filtroMarca.concat(filtroNombre)
        let listaProductosBuscados = lista1.concat(filtroTipo)

        console.log(listaProductosBuscados)

        /* Ahora creo nuevamente los productos con DOM pero con el nuevo array */

        listaProductosBuscados.forEach((producto) => {
            const div = document.createElement("div")
            div.classList.add("col-md-4")
            div.innerHTML = `
            <div class= "centradoHorizontal">
                <img src=${producto.imagen} class="pt-3 img-fluid">
                <h3 class="fuenteProductos pt-2">${producto.nombre.toUpperCase() + " " + producto.marca.toUpperCase()}</h3>
                <h3 class="precioPagina py-1">${" $ " + producto.precio}</h3>
                
                <button id="agregar${producto.id}" class="btn btn-outline-success my-3">Agregar al carrito</button>
            </div>`

            mostrarProductos.append(div)

            const botonAgregarCarrito = document.getElementById(`agregar${producto.id}`)

            botonAgregarCarrito.addEventListener("click", () => {
                agregarAlCarrito(producto.id)
            })
        })


    }

    /* boton para mostrar todos los productos despues de usar el filtro */

    let mostrarTodo = document.getElementById("mostrarTodo")

    mostrarTodo.onclick = () => {

        mostrarProductos.innerHTML = ``
        creaHtmlProductos()
    }

}

/* funcion para alimentar el array de carrito */

const agregarAlCarrito = (id) => {
    const traerProducto = listaProductos.find((prod) => prod.id == id)
    const enCarrito = carrito.find(prod => prod.id == traerProducto.id)
    if (!enCarrito) {
        carrito.push({
            ...traerProducto,
            cantidad: 1
        })
        alert("Agregaste " + traerProducto.nombre + " " + traerProducto.marca + " al carrito")
        console.log(carrito)
        productosCarrito.innerHTML = "";
        mostrarCarrito()
    } else {
        alert("¡Este producto ya está en el carrito!")
    }
}

/* para eliminar productos individualmente del carrito */

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    productosCarrito.innerHTML = "";
    mostrarCarrito()
}

/* funcion para crear html en el carrito */

const mostrarCarrito = () => {
    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.innerHTML = `
        <img src="${prod.imagen}" class="imagenCarrito img-fluid"> 
        <h4>${prod.nombre + " " + prod.marca}</h4>
        <h4>${"Precio unitario: " + prod.precio}</h4>
        <button onclick="eliminarDelCarrito(${prod.id})" class="eliminarCarrito">Eliminar</button>`

        productosCarrito.append(div)
    })

    /* total del carrito */

    const total = carrito.map((item) => (item.precio)).reduce((precioTotalCarrito, precioItemActual) =>
        precioTotalCarrito + precioItemActual, 0);
    console.log(total)

    /* creador del total */

    let compraTotal = document.createElement("h5")
    compraTotal.innerText = ("Total: " + total)
    productosCarrito.append(compraTotal)

    /* boton para borrar todo el carrito con cancelar compra */

    let cancelaTodo = document.getElementById("cancelaTodo")
    cancelaTodo.onclick = () => {
        carrito = []
        productosCarrito.innerHTML = ``
        console.log(carrito)
    }
}