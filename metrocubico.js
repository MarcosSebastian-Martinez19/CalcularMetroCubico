let ancho = prompt("Ingresa el ancho de tu terreno")
let largo = prompt("Ingrese el largo de su terreno")
let altura = prompt("Ingresa la altura/profundidad de tu terreno")
let resultado

function calcularMetroCubico() {
    resultado = parseInt(ancho * largo * altura)
    alert("Necesita " + resultado + " metros cúbicos.")
}
calcularMetroCubico()