function compile(code) {
    let counter = 0;
    let returnPoints = [];
    let inConditionalBlock = false;
    let checkConditional = false;

    for (let i = 0; i < code.length; i++) {
        if (checkConditional) {
            inConditionalBlock = counter > 0;
            checkConditional = false;
        }

        if (inConditionalBlock && code[i] !== '?') continue;

        switch (code[i]) {
            case '+':
                counter++;
                break;
            case '*':
                counter *= 2;
                break;
            case '-':
                counter--;
                break;
            case '%':
                returnPoints.push(i);
                break;
            case '<':
                if (returnPoints.length) i = returnPoints.pop();
                break;
            case '¿':
                checkConditional = true;
                break;
            case '?':
                inConditionalBlock = false;
                break;
        }
    }

    return counter;
}
result = compile('++¿+?') // 3
// (1 + 1) * 2 - 1 = 3
console.log(result)