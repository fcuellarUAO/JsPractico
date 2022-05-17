console.group("cuadrado")
const ladocuadrado = 6;
console.log("lados del cuadradro miden :" + ladocuadrado + " cm");

const perimetro = ladocuadrado * 4;
console.log("El perimetro es :" + perimetro + " cm");

const area = ladocuadrado * ladocuadrado;
console.log("El área es :" + area + " cm2");

console.groupEnd();

console.group("circulos");
const radiocirculo =4;
const diametrocirculo = radiocirculo * 2;
const PI = Math.PI;
const perimetrocirculo = diametrocirculo * PI ;
const areacirculo = (radiocirculo * radiocirculo) * PI;

console.log("El radio del circulo es:" + radiocirculo);
console.log("El diametro del circulo es:" + diametrocirculo);
console.log("El perimetro del circulo es:" + perimetrocirculo);
console.log("El area del circulo es:" + areacirculo);
console.groupEnd();

console.group("cuadradofuncion");
function perimetroCuadrado(lado) {
    return lado * 4;
  }

  function areaCuadrado(lado) {
    return lado*lado;
  }
  console.groupEnd();


  function calcularperimetrocuadrado(){
      const input = document.getElementById("InputCuadrado");
        const valor = input.value;
        const perimetro = perimetroCuadrado(valor);
  alert (perimetro)
    }

    function calcularareacuadrado(){
        const input = document.getElementById("InputCuadrado");
          const valor = input.value;
          const area = areaCuadrado(valor);
    alert (area)
      }