const primeiroNome = "Mario";
const sobrenome = "jr";
const apelido = "juninho";

if (apelido !== "") {
    console.log(apelido)
} else if (sobrenome !== "") {
    console.log(`${primeiroNome} ${sobrenome}`)
} else {
    console.log(primeiroNome)
}