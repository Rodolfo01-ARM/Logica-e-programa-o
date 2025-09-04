const { somarTresNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Teste da Função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarTresNumeros(5, 3, 2);

        // Compara o resulvado com o valor que você
        expect(resultadoDaSoma).to.equal(10);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarTresNumeros(50, 30, -20);

        // Compara o resulvado com o valor que você
        expect(resultadoDaSoma).to.equal(60);
    });
});