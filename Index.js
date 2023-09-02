console.log("Conectado exitosamente");

const txtnum1 = document.getElementById("num1");

const txtnum2 = document.getElementById("num2");

const txtop = document.getElementById("op");


const btnCalcular = document.getElementById("Calcular")
const txtresultado = document.getElementById("resultado")


function calcular() {
   const operacion = txtop.value
   const num1 = parseFloat(txtnum1.value)
   const num2 = parseFloat(txtnum2.value)
    let  resultado;
if ((operacion == "+" || operacion == "-" || operacion== "*" || operacion=="/") && !isNaN(num1) && !isNaN(num2) )

{
    console.log("Calculando") 
        switch (operacion) {

            case "+":
                resultado = num1 + num2;
                break;

            case "-":
                resultado = num1 - num2;
                break;

            case "*":
                resultado = num1 * num2;
                break;
            

            case "/":
                 resultado = num1 / num2;
                 break;
        
           
        }
   


        txtresultado.value = "  =  "  + resultado;

        txtresultado.style = "color:white"
}
else {
    txtresultado.value = "Calculo Imposible"
    txtresultado.style = "color:red"
}






}