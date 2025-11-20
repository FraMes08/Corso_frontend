let prodotto = {
    nome: "Smartphone",
    marca: "TechBrand",
    prezzo: 699.99,
    disponibilita: true,
};

let prodotto2 = {
    nome: "Cuffie Wireless",
    marca: "SoundBrand",
    disponibilita: true,
};

function dettagliProdotto({ nome, prezzo = 0}){
    console.log(`Prodotto: ${nome}\nPrezzo: €${prezzo}`);
}

dettagliProdotto(prodotto);
dettagliProdotto(prodotto2);
