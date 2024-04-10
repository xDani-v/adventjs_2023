function decode(message) {
    const stack = [];
    let resultado = '';

    for (let i = 0; i < message.length; i++) {
        if (message[i] === '(') {
            stack.push(resultado);
            resultado = '';
        } else if (message[i] === ')') {
            resultado = stack.pop() + resultado.split('').reverse().join('');
        } else {
            resultado += message[i];
        }
    }

    return resultado;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo
