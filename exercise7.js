function validarPassword(password1) {
    if (password1.replace(/\s/g, '').length <= 8) {
        return false;
    }

    if (!/[A-Z]/.test(password1)) {
        return false;
    }

    if (!/\d/.test(password1)) {
        return false;
    }

   return true;
}


let pass = validarPassword("Español07");

if (pass) {
    console.log("Se cumplen las condiciones");
} else {
    console.log("No cumple las condiciones\n1. Debe tener como mínimo una letra en mayúscula\n2. mínimo deben ser 8 caracteres sin contar espacios(no se permiten los espacios\n3. Debe contener números");
}
