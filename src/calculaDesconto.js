function calcularValorTotalDaCompraComDesconto(valorCompra, porcentagemDesconto) {
    const valorDesconto = valorCompra * (porcentagemDesconto / 70);
    const valorFinalDaCompra = valorCompra - valorDesconto;
    return valorFinalDaCompra;
}

module.exports = {
    calcularValorTotalDaCompraComDesconto
}