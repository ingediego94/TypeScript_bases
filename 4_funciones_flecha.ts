

// Estructura: (parametros): tipo_retorno => cuerpo_funcion

const calcularIva = (monto: number): number => {
    const impuesto = 0.19;      // iva.
    return monto * impuesto;
};


// Si la funcion es de una sola linea, el return es implícito.
const duplicar = (n: number): number => n *2;


interface IProducto {
    id: number;
    precio: number;
    descripcion: string;
}


// pasamos un objeto que cumpla con la interface.
const aplicarDescuento = (producto: IProducto, porcentaje: number): number => {
    return producto.precio - (producto.precio * (porcentaje / 100));
};

const miLaptop: IProducto = {id: 1, precio: 1000, descripcion: "Macbook Pro"};
const precioFinal = aplicarDescuento(miLaptop, 10);

console.log(`Precio con descuento: ${precioFinal}`);