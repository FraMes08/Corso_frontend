let pezzi = ['ciao', 'come', 'va?'];
let sep = ' - ';

function concatenaSep(sep, ...pezzi){
    return pezzi.join(sep);
}

console.log(concatenaSep(sep, ...pezzi));