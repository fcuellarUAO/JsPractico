
// console.group("cuadrado")
// const  precioOriginal = 60;
// console.log("el precio es : " + precioOriginal);
// console.groupEnd();

function calculardescuento ( precio, descuento)
{ const porcentajepreciocondescuento = 100 - descuento;
    const preciofinal = ( precio * porcentajepreciocondescuento) / 100 ; 
    return preciofinal;
}