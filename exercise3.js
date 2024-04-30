function divisionBySubtraction(dividend,divider){
    let quotient = 0;
    let residue = dividend;
    
    while (residue >= divider) {
        residue -= divider;
        quotient++;
    }
    
    return { quotient , residue }
}
const { quotient , residue } = divisionBySubtraction(12, 5);
console.log("Resultado: "+ quotient +" y sobran "+ residue);