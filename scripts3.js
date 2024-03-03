const fs = require('fs/promises');
const { json } = require('stream/consumers');

(async function () {
    const arquivoJson = await fs.readFile('teste.json');

    const pessoas = JSON.parse(arquivoJson);

    pessoas.push({
        nome: 'Jéssica',
        idade: 35
    });

    const arrayJson = JSON.stringify(pessoas);

    console.log(arrayJson);
})();