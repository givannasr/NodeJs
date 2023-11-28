const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readLine.question('Qual sua linguagem de programação favorita?', (language) => {
    if (language === 'Javascript') {
        console.log(`${language} é uma linguagem de programação interpretada estruturada.`);
    } else if (languagem === 'Python') {
        console.log(`${language} é uma linguagem de programação de alto nível, interpretada de script.`);
    } else {
        console.log(language);
    }
    readLine.close();
})