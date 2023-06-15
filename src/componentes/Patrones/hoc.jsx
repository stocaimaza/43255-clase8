//PATRONES DE DISEÑO: 

//En React tenemos algunos patrones de diseño que nos permite reutilizar componentes. 

//1) High Order Components (HOC)
//2) Render Props

//1) Es una función que toma como argumento un componente y devuelve un nuevo componente con una funcionalidad adicional. 

export const mensajeConTitulo = (Mensaje) => {
    return function() {
        return (
            <>
                <h2>Hola Mundo! </h2>
                <Mensaje/>
            </>
        )
    }
}

//Ejemplo muy argentino: aumento de precios. 

export const conAumento = (Producto) => {
    return function({nombre, precio}) {
        let nuevoPrecio = precio + 500;
        return <Producto nombre={nombre}  precio={nuevoPrecio} />
    }
}
