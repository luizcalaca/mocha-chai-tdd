//mocha give us two reserved word: describe an it
//chain give us expect and equals

const { expect } = require('chai');

const { finalCalculate } = require('../student/finalCalculate');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const answer = finalCalculate(4);

    expect(answer).to.be.equals('reprovado');
  });
});