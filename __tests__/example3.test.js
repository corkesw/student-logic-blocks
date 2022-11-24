const dnaPairs = require("../dna-pairs.js");

describe("dnaPairs()", () => {
  test("returns an empty array when passed an empty string", () => {
    // arrange
    const input = "";
    const emptyarray = [];

    // act
    let result = dnaPairs(input);

    // assert
    expect(result).toEqual(emptyarray);
  });

  test("if passed G it matches and has expected output", () => {
    // arrange
    const input = "G";
    const expectedOutput = [["G", "C"]];

    // act
    let result = dnaPairs(input);

    // assert
    expect(result).toEqual(expectedOutput);
  });

  test("if passed C it matches and has expected output", () => {
    // arrange
    const input = "C";
    const expectedOutput = [["C", "G"]];

    // act
    let result = dnaPairs(input);

    // assert
    expect(result).toEqual(expectedOutput);
  });

  test("if passed A it matches and has expected output", () => {
    // arrange
    const input = "A";
    const expectedOutput = [["A", "T"]];

    // act
    let result = dnaPairs(input);

    // assert
    expect(result).toEqual(expectedOutput);
  });

  test("if passed T it matches and has expected output", () => {
    // arrange
    const input = "T";
    const expectedOutput = [["T", "A"]];

    // act
    let result = dnaPairs(input);

    // assert
    expect(result).toEqual(expectedOutput);
  });

  test("if passed AG ( a double character string where both characters match) it matches and has expected output", () => {
    // arrange
    const input = "AG";
    const expectedOutput = [
      ["A", "T"],
      ["G", "C"],
    ];

    // act
    let result = dnaPairs(input);

    // assert
    expect(result).toEqual(expectedOutput);
  });

  test("if passed ATAG ( a quadruple character string where all characters match) it matches and has expected output", () => {
    // arrange
    const input = "ATAG";
    const expectedOutput = [
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ];

    // act
    let result = dnaPairs(input);

    // assert
    expect(result).toEqual(expectedOutput);
  });

  test("matches properly and filters out mismatching characters when passed a combination of matching and mismatching characters", () => {
    // arrange
    const input = "ATAGZZ";
    const expectedOutput = [
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ];

    // act
    let result = dnaPairs(input);

    // assert
    expect(result).toEqual(expectedOutput);
  });
});
