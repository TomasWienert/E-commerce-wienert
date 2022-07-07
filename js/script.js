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


function showProducts() {
    listaProductos.forEach((product) => {
        let card = document.createElement("div")
        card.setAttribute("class", "centradoHorizontal col-md-4")
        mostrarProductos.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.imagen)
        let name = document.createElement("h3")
        name.innerText = (product.nombre.toUpperCase() + " " + product.marca.toUpperCase())
        let price = document.createElement("h3")
        price.innerText = (product.precio)
        let botonCantidadProducto = document.createElement("input")
        botonCantidadProducto.innerText = ("maximo 24 unidades")
        let botonAgregarCarrito = document.createElement("button")
        botonAgregarCarrito.innerText = ("Agregar al carrito")
        card.append(img, name, price, botonCantidadProducto, botonAgregarCarrito)

        botonAgregarCarrito.addEventListener("click", function () {
            carrito.push(product)
            alert("Agregaste " + product.nombre + " " + product.marca + " al carrito")
            console.log(carrito)
            productosCarrito.innerHTML = ""
            showCart()
        })
    })
}

showProducts() /* como hago para que solo se use la funcion en la pagina vajilla? */

/* Mostrar carrito */

let carritoVacio = document.createElement("h2")
let productosCarrito = document.getElementById("productosCarrito")


if (!carrito.length) {
    carritoVacio.innerText = ("El carrito esta vacío")
    productosCarrito.append(carritoVacio)
}

function showCart() {
    carritoVacio.remove()

    carrito.forEach((element) => {
        let listaCarrito = document.createElement("li")
        listaCarrito.innerHTML += `
        <div class="ordenCarrito">
            <img src="${element.imagen}" class="imagenCarrito"> 
            <h4>${element.nombre + " " + element.marca}</h4>
            <h4>${"Precio unitario: " + element.precio}</h4>
            <button class="eliminarCarrito" data-id=${element.id}>Eliminar</button>
        </div>`

        productosCarrito.appendChild(listaCarrito)
    })

    /* let eliminarItem = */

    /* con el map busca los valores de precio de todos los articulos que agrego al carrito y me hace un array con esos
    valores despues con el reduce tomo los valores de precios y los sumo para obtener el total, si no hay valores 
    devuelve 0 que es donde empieza a iterar*/

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


/* Filtro */

let botonBuscar = document.getElementById("botonBuscar")


botonBuscar.onclick = () => {
    busquedaUsuario(mostrarProductos)

}

function busquedaUsuario(mostrarProductos) {

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

    let lista1 = filtroMarca.concat(filtroNombre)
    let listaProductosBuscados = lista1.concat(filtroTipo)

    console.log(listaProductosBuscados)

    /* Ahora creo nuevamente los productos con DOM pero con el nuevo array */

    listaProductosBuscados.forEach((product) => {
        let card = document.createElement("div")
        card.setAttribute("class", "centradoHorizontal col-md-4")
        mostrarProductos.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.imagen)
        let name = document.createElement("h3")
        name.innerText = (product.nombre.toUpperCase() + " " + product.marca.toUpperCase())
        let price = document.createElement("h3")
        price.innerText = (product.precio)
        let botonCantidadProducto = document.createElement("input")
        botonCantidadProducto.innerText = ("maximo 24 unidades")
        let botonAgregarCarrito = document.createElement("button")
        botonAgregarCarrito.innerText = ("Agregar al carrito")
        card.append(img, name, price, botonCantidadProducto, botonAgregarCarrito)

        botonAgregarCarrito.addEventListener("click", function () {
            carrito.push(product)
            alert("Agregaste " + product.nombre + " " + product.marca + " al carrito")
            console.log(carrito)
            productosCarrito.innerHTML = ""
            showCart()
        })
    })

}