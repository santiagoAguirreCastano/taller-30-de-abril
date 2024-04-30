function words(word) {
    let letters = 0;
    let numbers = 0;
    let space = 0;

    for (let i = 0; i < word.length; i++) {
        let character = word.charAt(i);
        if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
            letters++;
        }
        else if (character >= '0' && character <= '9') {
            numbers++;
        }
        else if (character === ' ') {
            space++;
        }
    }

    return {
        "letras":letters,
        "numeros":numbers,
        "espacios":space
    };
}
console.log(words("p5  y7i"))