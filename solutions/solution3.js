function dnaPairs(dna) {
  const pair = { G: ["G", "C"], A: ["A", "T"], T: ["T", "A"], C: ["C", "G"] };
  const dnaToArr = dna.split("");
  const resultArr = [];
  dnaToArr.forEach((element) => {
    if (pair.hasOwnProperty(element) === false) {
      resultArr.push([]);
    } else {
      resultArr.push(pair[element]);
    }
  });
  return resultArr;
}
