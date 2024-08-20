//6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//La fórmula del perímetro  es p = 2*(a + b)
//funcion con parametros y que devuelve un resultado
function CalcularPerimetro(a, b){
    let perímetro = 2 * (a + b);
    return perímetro;
}

let base = parseInt(prompt("ingrese la base del rectangulo"));
let altura = parseInt(prompt("ingrese la altura del rectangulo"));

//invoco a la funcion y le paso los parametros de base y altura, despues con esos datos me retorna el perimetro
//ese perimetro lo almaceno en una variable resultado
let resultado = CalcularPerimetro(base, altura);
document.write(`<p>El perimetro del rectangulo es ${resultado} </p>`);
//tmb asi
document.write(`<p>El perimetro del rectangulo es ${CalcularPerimetro(5, 6)} </p>`);