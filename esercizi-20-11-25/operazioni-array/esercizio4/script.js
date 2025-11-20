let regali = ["Libro", "Puzzle", "Sciarpa"];
console.log("Array originale:", regali);
regali.unshift("Giocattolo", "Bicicletta");
console.log("Array dopo l'aggiunta di due regali all'inizio:", regali);
regali.splice(1, 1);
console.log("Array dopo la rimozione del secondo regalo:", regali);
copia = regali.slice(2, 4);
console.log("Copia degli ultimi due regali:", copia);