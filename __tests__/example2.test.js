const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  // test one
  test('empty string creates empty array', () => {
    //arrange
    const dna = ""
    //act
    const output = dnaPairs(dna)
    //assert
    expect(output).toEqual([])
  });
   // test two
   test('string of one letter returns array with correct other letter', () => {
    //arrange
    const dna = "G"
    //act
    const output = dnaPairs(dna)
    //assert
    expect(output).toEqual([["G","C"]])
     //arrange
     const dna1 = "A"
     //act
     const output1 = dnaPairs(dna1)
     //assert
     expect(output1).toEqual([["A","T"]])
  });
  // test three
  test('string of multiple letters returns array with correct other letter', () => {
    //arrange
    const dna = "GATC"
    //act
    const output = dnaPairs(dna)
    //assert
    expect(output).toEqual([["G","C"], ["A", "T"], ["T", "A"], ["C", "G"]])
  });
});