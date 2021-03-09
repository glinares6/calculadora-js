/* let resultado
let primerNumero
let segundoNumero
// creamos un array devalores
let simbolos = ["sumar","restar","multiplicar","dividir"]
// se reeemplazar valores por templates string
let operador = prompt(`elija el operador \n1. ${simbolos[0]} \n2. ${simbolos[1]} \n3. ${simbolos[2]} \n4. ${simbolos[3]}`,"")

// ingresar valores

function asignarValores(){
primerNumero = prompt(`${simbolos[operador-1]} \npor favor escriba el primer  múmero`,"")
 segundoNumero = prompt(`${simbolos[operador-1]} \npor favor escriba el segundo número  múmero`,"")

}
function resultadoFinal(){
    alert("el resultado es "+parseFloat(resultado))
}
if(operador ==1){
// sumar
asignarValores()
 resultado =parseInt(primerNumero) + parseInt(segundoNumero)
 resultadoFinal()
}else if(operador == 2){
// restar
asignarValores()
 resultado =parseInt(primerNumero) - parseInt(segundoNumero)
 resultadoFinal()
}else if(operador == 3){
// multiplicar
asignarValores()
 resultado =parseInt(primerNumero) * parseInt(segundoNumero)
 resultadoFinal()
}else if(operador == 4){
// dividir
asignarValores()
 resultado =parseInt(primerNumero) / parseInt(segundoNumero)
 resultadoFinal()

}
else{
    alert("se a escrito texto o paso el rango de numeros(1-4) \nDebe escribir los numeros mostrador en pantalla");
}

 */