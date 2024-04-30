function factorial(number) {
    let result = 1;
    let i = 1;
    
    do {
        result *= i;
        i++;
    } while (i <= number);
    
    console.log("El factorial de "+ number + " es:" + result);
    
}
factorial(5);

