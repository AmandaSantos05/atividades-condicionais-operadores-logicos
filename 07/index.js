const idade = 18;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    console.log('ACESSO NEGADO')
} else if (ehEstudante === true || idade < 18) {
    console.log('10 reais')
} else {
    console.log('20 reais')
}