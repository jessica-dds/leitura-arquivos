const fsPromises = require('fs/promises'); //Só terá funções assíncronas 
const fs = require('fs'); //Aqui terá funções síncronas

console.log('Antes de ler');


// utilizando o then e o catch

//const a = fsPromises.readFile('a.txt');

// a.then((data) => {
//     console.log(data.toString());
// });

// a.catch((erro) => {
// });

// usando o async e await

(async function () {
    const a = await fsPromises.readFile('a.txt');
    console.log(a.toString());
})();

console.log('Depois de ler');