const a1 = [10,20,30];

// a1.forEach(valor => console.log(valor))

// Simulando reduce
let total = 0;
a1.forEach(valor =>
    total += valor
);
console.log(total);
