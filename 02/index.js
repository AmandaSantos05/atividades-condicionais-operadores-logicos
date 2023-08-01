// PAPEL VENCE PEDRA
// PEDRA VENCE TESOURA
// TESOURA VENCE PAPEL

const jogada1 = 'pedra';
const jogada2 = 'papel';

if (jogada1 === jogada2) {
    console.log('EMPATE');
} else if (jogada1 === 'papel' && jogada2 === 'pedra' || jogada1 === 'pedra' && jogada2 === 'tesoura' || jogada1 === 'tesoura' && jogada2 === 'papel') {
    console.log(jogada1);
} else {
    console.log(jogada2);
}