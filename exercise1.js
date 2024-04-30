function operationsCalculator(number1,number2){
    if( isNaN(number1) &&  isNaN(number2) || number1 == 0 && number2 == 0){

        console.log("No se permiten letras, ni poner valores igual 0")

    }else{    
    let addition = number1 + number2

    let substraction = number1 - number2
    
    let multiplication = number1 * number2
    
    let division = number1 / number2
    console.log("Operaciones de los numeros: "+number1+" y "+number2)

    console.log("La suma del primer y segundo numero es: "+ addition+"\n"+"La resta del primer y segundo numero es: "+ substraction+"\n"+"La multiplicacion del primer y segundo numero es: "+ multiplication+"\n"+"La division del primer y segundo numero es: "+division)}

}
let a
let b;
 
operationsCalculator(5,5)