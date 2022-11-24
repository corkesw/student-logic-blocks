describe("dnaPairs()", () => {
  test("check if there is an input", () => {
    const input = [];
    const expected = [];
    const output = dnaPairs(input);
    expect(output).toEqual(expected);
  });
  test("should return the dna pairing with the passing letter", () => {
    const input = ["A", "G", "T"];
    const expected = [
      ["A", "T"],
      ["G", "C"],
      ["T", "A"],
    ];
    const output = dnaPairs(input);
    expect(output).toEqual(expected);
  });
});

// example1 test -
// Wrong data format as an input. Input should be a string not an Array.
