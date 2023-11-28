const soma = function (a, b) {
    return a + b
};

const subtracao = function (a, b) {
    return a - b
};

const multiplicacao = function (a, b) {
    return a * b
}

const divisao = function (a, b) {
    return a / b
}

const parouImpar = function (n) {
    if ((n % 2) === 0) {
        return `par`;
    } else {
        return 'impar';
    }
}

module.exports = {
    soma, subtracao, multiplicacao, divisao, parouImpar
};