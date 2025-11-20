let p1 = ["pane", "latte"];
let p2 = ["pasta", "uova"];

function listaCompleta(...liste) {
    return liste.flat();
}

console.log(listaCompleta(p1, p2));