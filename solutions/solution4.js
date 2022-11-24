function dnaPairs(dna) {
    return [...dna].map((base) => [
      base,
      { A: "T", G: "C", T: "A", C: "G" }[base],
    ]);
  }