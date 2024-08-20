/*
2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
*/
//usando etiquetas html ``
const array = [];

do {
  let ciudades = prompt("ingrese nombre de ciudades");
  array.push(ciudades);
  console.log(ciudades);


} while (confirm("desea continuar?"));

console.log(array);

//longitud del arreglo
document.write(`<p>El arreglo de ciudades tiene ${array.length} elementos </p>`);

//mostrar las posiciones en forma de lista de la posicion 1, 3 y ultima
document.write(`<ul>`);
document.write(`<li> Elemento de la primer posicion: ${array[0]} </li>`);
document.write(`<li> Elemento de la tercera posicion: ${array[2]} </li>`);
document.write(`<li> Elemento de la ultima posicion: ${array[array.length - 1]} </li>`);
document.write(`</li>`);

//añadir a la ultima posicion la ciudad paris (se usaba push para la primera posicion unshift)
array.push("Paris");
document.write(`<ul>`);
document.write(`<li> Elemento de la ultima posicion: ${array[array.length - 1]} </li>`);
document.write(`</li>`);

//elemento que ocupa la segunda posicion
document.write(`<ul> <li> Elemento de la segunda posicion posicion: ${array[1]} </li> </li>`);

//reemplazar la segunda posicion por la ciudad barcelona
array.splice(1,0,"Barcelona");

//mostrar el arreglo en forma de lista

document.write(`<h2>arreglo de ciudades</h2>`);

document.write(`<ul>`);
for (let i = 0; i < array.length; i++) {
  document.write(`<li> elemento: ${array[i]} </li>`);
}
document.write(`</ul>`);

