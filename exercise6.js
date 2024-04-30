function numbers(number){
   if(number<=1){
    return "El numero no es primo"
   }
   for(i=2;i<number;i++){
if(number%i===0)
return "El numero no es primo"

   }
   return "El numero es primo"
}
console.log(numbers(7))
