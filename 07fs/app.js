const fs = require('fs');

const content = 'Criando um arquivo com File System.';

// fs.writeFile('C:/node/arquivo.txt', content, (err) => {
//     if (err) throw err;
//     console.log('Arquivo criado com sucesso!');
// })

// fs.readFile('C:/node/arquivo.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

const name = 'arquivo.txt';
const nName = 'node.txt';

// fs.rename(name, nName, (err) => {
//     if (err) throw err ;
//     console.log('Aequivo renomeado!');
// })

fs.unlink(nName, (err) => {
    if (err) throw err ;
    console.log('Aequivo removido!');
})