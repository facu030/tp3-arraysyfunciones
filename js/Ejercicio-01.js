//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

console.log(meses);
document.write("la cantidad de meses son: " + meses.length + "<br>");
document.write("el primer mes es: " + meses[0]);

//usando etiquetas html ``

document.write(`<h2>lista de meses</h2>`);

document.write(`<ul>`);
for (let i = 0; i < meses.length; i++) {
  document.write(`<li> ${meses[i]} </li>`);
}
document.write(`</ul>`);
