import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value
    const url = document.querySelector("[data-url]").value
    const categoria = document.querySelector("[data-categoria]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value

    productoServices.creaProducto(nombre, url, categoria, precio, descripcion).then(respuesta => {
        window.location.href = "/index.html"
        alert("Se creo producto")
        console.log(respuesta);
    }).catch(err => {
        console.log(err);
    })

})