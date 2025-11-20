let coda = ["A", "B", "C", "D"];
console.log("Coda iniziale:", coda);
coda.unshift("X", "Y");
console.log("Coda dopo l'aggiunta di X e Y all'inizio:", coda);
coda.pop();
console.log("Coda dopo la rimozione dell'ultimo elemento:", coda);
let rimosso = coda.splice(1, 1);
console.log("Coda dopo la rimozione del secondo elemento (", rimosso, "):", coda);
