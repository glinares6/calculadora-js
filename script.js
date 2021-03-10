// CALCULADORA JS
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

// CALCULADORA HTML +JS

const btnEnviar = document.getElementById('enviar')

if(btnEnviar){
    btnEnviar.addEventListener('click',() =>{
        // verificamos que los datos sean retornados con el log 
        // console.log(primerNum.value)
        // console.log(segundoNum.value)

    // asignamos el Id del DOM en el js 
        const resultado = document.getElementById('resultado')
    // imprimimos en el documento el valor del  imputs
    const operador =document.getElementById('operador')
    // console.log(operador.value);
 
        if(operador.value == "+"){
                resultado.innerHTML =parseInt(primerNum.value) + parseInt(segundoNum.value)
            }else if(operador.value == "-"){
                resultado.innerHTML =parseInt(primerNum.value) - parseInt(segundoNum.value)
            }else if(operador.value == "*"){
                resultado.innerHTML =parseInt(primerNum.value) * parseInt(segundoNum.value)
            }else if(operador.value == "/"){
                resultado.innerHTML= parseInt(primerNum.value) / parseInt(segundoNum.value)
            }else{
                resultado.innerText="el operador no es valido debe poner +,-,*,/"
            }

        primerNum.value=""
        segundoNum.value=""
        operador.value=""
    })
}