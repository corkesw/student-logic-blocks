function dnaPairs(dna) {
    if (dna === "") {
      return [];
    }
  
    const dnaSplit = dna.split("");
    const dnaPaired = [];
  
    dnaSplit.forEach((letter) => {
      switch (letter) {
        case "A":
          dnaPaired.push(["A", "T"]);
          break;
        case "T":
          dnaPaired.push(["T", "A"]);
          break;
        case "G":
          dnaPaired.push(["G", "C"]);
          break;
        case "C":
          dnaPaired.push(["C", "G"]);
          break;
      }
    });
    return dnaPaired;
  }