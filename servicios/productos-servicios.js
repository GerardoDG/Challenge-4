const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const creaProducto = (imageURL, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imageURL,
            categoria,
            nombre,
            precio,
            descripcion
        })
    }).then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body
        }
        throw new Error("No fue posible crear el producto")
    })
}

export const productoServices = {
    listaProductos,
    creaProducto,
}