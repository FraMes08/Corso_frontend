let utente = {
    nome: "Mario",
    cognome: "Rossi",
    nazionalita: "Italiana",
    eta: 30
};

riassumiUtente(utente);

function riassumiUtente({ nome, cognome, ...resto}) {
    return {
        nomeCompleto: `${nome} ${cognome}`,
        altriDati: resto
    }
}
console.log(riassumiUtente(utente));