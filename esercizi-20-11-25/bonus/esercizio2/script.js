let alunni = [
    { nome: "Luca", voto: 8 },
    { nome: "Maria", voto: 9 },
    { nome: "Giovanni", voto: 7 }
];

function presentaAlunno({ nome, voto }) {
    console.log(`L'alunno si chiama ${nome} e ha preso un voto di ${voto}.`);
}

alunni.forEach(presentaAlunno);