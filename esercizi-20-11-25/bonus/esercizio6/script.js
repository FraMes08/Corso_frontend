
stringa1 = "ciao";
stringa2 = "hi";
stringa3 = "hello";


function filtraStringhe(...stringhe) {
    return stringhe.filter(str => str.length > 3);
}

let risultato = filtraStringhe(stringa1, stringa2, stringa3);
console.log(risultato);