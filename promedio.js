const lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;

for ( let i = 0 ; i < lista1.length  ; i++)
{
    sumaLista1 = sumaLista1 + lista1[i]
}

const promediolista1 = sumaLista1/lista1.length;

function calcularmedia (lista) {
//     let sumaLista = 0;  
//     for ( let i = 0 ; i < lista.length  ; i++)
// {
//     sumaLista = sumaLista + lista[i]
// }

const sumaLista = lista.reduce(
 function (valoracumulado = 0, nuevoelemento) {
return valoracumulado + nuevoelemento;
 }

);

const promediolista = sumaLista/lista.length;
return promediolista;
}