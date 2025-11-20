let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

function unisciArray(...arrays) {
    return arrays.flat();
}

let risultato = unisciArray(array1, array2, array3);
console.log(risultato);