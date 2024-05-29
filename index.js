var numeroIngresado1 = parseFloat(prompt("Ingrese el primer número:"));
var numeroIngresado2 = parseFloat(prompt("Ingrese el segundo número:"));
var numeroIngresado3 = parseFloat(prompt("Ingrese el tercer número:"));


if (numeroIngresado1 === numeroIngresado2 && numeroIngresado2 === numeroIngresado3) {
    console.log("Los tres números son iguales: " + numeroIngresado1);
} else {
    
    var mayor = Math.max(numeroIngresado1, numeroIngresado2, numeroIngresado3);
    
    var menor = Math.min(numeroIngresado1, numeroIngresado2, numeroIngresado3);
    
    var centro = numeroIngresado1 + numeroIngresado2 + numeroIngresado3 - mayor - menor;

    
    console.log("Ordenados de mayor a menor: " + mayor + ", " + centro + ", " + menor);

    
    console.log("Ordenados de menor a mayor: " + menor + ", " + centro + ", " + mayor);
}
