/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla 
debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario
*/ 

function multiplicar(num) {
  document.write(`<table>
    <thead>
    <tr>
    <th>Tabla de multiplicar </th>
     </tr>
    </thead>
    `);
  document.write(`<tbody>`);
  for (let i = 1; i<=10; i++) {
    document.write(`
    <tr>
        <td>${num} * ${i} </td>
        <td>${num * i} </td>
    </tr>`);
  }
  document.write(`</tbody> </table>`);
}

let numero = parseInt(prompt("ingrese un numero"));
multiplicar(numero);
