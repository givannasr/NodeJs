const funcoes = require('./funcoes')

let a = 10, b = 20, c = 3, d = 5;
let e = 4, f = 7, g = 2, h = 8, i = 2;

let resSoma = funcoes.soma(a, b);
let resSub = funcoes.subtracao(c, d);
let resMulti = funcoes.multiplicacao(e, f);
let resDivide = funcoes.divisao(h, i);
let resNumb = funcoes.parouImpar(g);

console.log(`A soma dos valores é ${resSoma}`);
console.log(`A subtração dos valores é ${resSub}`);
console.log(`A multiplicação dos valores é ${resMulti}`);
console.log(`A divisão dos valores é ${resDivide}`);
console.log(`O numero ${g} é ${resNumb}`);