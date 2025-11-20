let numeri = [5, 3, 9, 1, 4];
console.log("Array originale:", numeri);
numeri.pop();
numeri.shift();
numeri.push(7);
console.log("Array modificato:", numeri);
let sottoserie = numeri.slice(0, 2);
console.log("Array originale dopo le modifiche:", numeri);
console.log("Sottoserie estratta:", sottoserie);
