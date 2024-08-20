/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado 
una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/
//usando etiquetas html ``

function paroimpar(num){
    if(num % 2 == 0){
        document.write(`<p> El numero ${num} es par </p>`)
    }else{
        document.write(`<p> El numero ${num} es impar </p>`)
    }
}

let numero = parseInt(prompt("ingrese un numero"));
paroimpar(numero);