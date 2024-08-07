let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let reserva = varA;
// varA = varB;
// varB = varC;
// varC = reserva;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);