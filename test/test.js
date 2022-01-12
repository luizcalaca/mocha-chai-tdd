//mocha give us two reserved word: describe an it
//chain give us expect and equals

const { expect } = require('chai');

const calculaSituacao = require('../student/finalStudentCalculate');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const answer = finalStudentCalculate(4);

    expect(answer).to.be.equals('reprovado');
  });
});