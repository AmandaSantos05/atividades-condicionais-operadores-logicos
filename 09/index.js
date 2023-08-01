const tipoDePagamento = "dinheiro";
const valorDoProduto = 13000;
let valorFinal;

if (tipoDePagamento === 'credito') {
    valorFinal = valorDoProduto - (valorDoProduto * 0.05)
    console.log(`Valor a ser pago é R$${valorFinal / 100}`)
} else if (tipoDePagamento === 'cheque') {
    valorFinal = valorDoProduto - (valorDoProduto * 0.03)
    console.log(`Valor a ser pago é R$${valorFinal / 100}`)
} else if (tipoDePagamento === 'debito' || tipoDePagamento === 'dinheiro') {
    valorFinal = valorDoProduto - (valorDoProduto * 0.10)
    console.log(`Valor a ser pago é R$${valorFinal / 100}`)
}