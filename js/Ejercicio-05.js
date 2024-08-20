

function cadena(text) {
  if (text == text.toUpperCase()) {
    return "con mayusculas";
  } else if (text == text.toLowerCase()) {
    return "con minusculas";
  } else {
    return "con mayusculas y minusculas";
  }
}

let oracion = prompt("Ingrese un texto");
document.write(`<p> el texto ingresado esta escrito ${cadena(oracion)} </p>`);
