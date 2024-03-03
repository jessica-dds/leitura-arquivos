const fs = require('fs');

console.log("Antes de ler");

//Leitura de arquivos síncrona
//const a = fs.readFileSync('a.txt').toString();

//console.log(a);

//Leitura de arquivos assíncrona
fs.readFile('a.txt', (erro, data) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log(data.toString());
    }
});



console.log("Depois de ler");