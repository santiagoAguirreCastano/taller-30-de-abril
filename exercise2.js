function message(name){
   

    if(name.length === 0 || name[0] !== name[0].toUpperCase()){
        return "Ingrese un nombre con la primera letra en mayuscula"
    }
    let lettersC=0

    for (let i = 0; i < name.length; i++) {
        if ((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z')) {
            lettersC++;
        }else return "El nombre no debe de contener numeros"
    }

        if(lettersC<2){
            return "Ingrese al menos 2 letras"
        }
return "Buenas tarde señor/señora "+name
    }
console.log(message("T"))