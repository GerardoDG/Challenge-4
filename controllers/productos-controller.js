import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (nombre, precio, imageURL) => {
    const card = document.createElement("div");
    const contenido = `
            <ul class="lista_productos">
            <li class="imagen"><img class="imagenprod" src="${imageURL}"></li>
            <li class="titulo__imagen">
                <p>${nombre}</p>
            </li>
            <li class="costo">
                <p>$${precio}</p>
            </li>
            <li class="link__producto">
                <h4>Ver producto</h4>
            </li>
            </ul>
    `;

    card.innerHTML = contenido;
    card.classList.add("caja")
    return card;
};

const productos = document.querySelector("[data-productos]")

const render = async() => {
    try {
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(element => {
            productos.appendChild(nuevoProducto(element.nombre, element.precio, element.imageURL))
        });
    } catch (error) {
        console.log(error);
    }
}

render();