let numeri = [5, 12, 8, 130, 44];
let copiaNumeri = [...numeri];

copiaNumeri.push(99);

console.log("Array originale:", numeri);
console.log("Copia modificata:", copiaNumeri);