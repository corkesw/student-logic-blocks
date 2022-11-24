function dnaPairs(dna) {
    // Write your code here
    if (dna.length === 0) return [[]];
  
    let array = [];
  
    for (let j = 0; j < dna.length; j++) {
      if (dna[j] === "G") {
        array.push(["G", "C"]);
      } else if (dna[j] === "A") {
        array.push(["A", "T"]);
      } else if (dna[j] === "T") {
        array.push(["T", "A"]);
      } else if (dna[j] === "C") {
        array.push(["C", "G"]);
      }
    }
  
    return array;
  }