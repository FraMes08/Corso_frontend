let num1 = 5;
let num2 = 10;
let num3 = 15;

let numeri = [10, 20, 30];

function sommaVariabili(...numeri) {
    let somma = 0;
    for (let numero of numeri) {
        somma += numero;
    }
    return somma;
}

console.log("Somma numeri individuali: ", sommaVariabili(num1, num2, num3));
console.log("Somma numeri array: ", sommaVariabili(...numeri));