let elementi = ['Elemento1', 'Elemento2', 'Elemento3', 'Elemento4', 'Elemento5'];

console.table(prendiPrimoEConta(...elementi));





function prendiPrimoEConta(...items) {
    const [primoElemento, ...restoElementi] = items;
    return {
        primo: primoElemento,
        conteggioResto: restoElementi.length
    };
}
