let inp=prompt("Ingrese una cadena de caracteres:");
let arreglo=inp.split("");
function esunaletra() {
    return (/[a-zA-Z]/).test(arreglo[1])
}
let estado=false;
for (let index = 2; index < arreglo.length-1; index++) {
    if ((/[a-zA-Z]/).test(arreglo[index])===true) {
        estado=true;
    } else {
        estado=false;
        break;
    }
    
}
console.log(arreglo);
if (arreglo[0]==='"' && esunaletra()===true && estado===true && arreglo[arreglo.length-1]==='"') {
    console.log("Es un identificador");
} else {
    console.log("No pertenece al lenguaje");
}