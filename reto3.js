function findNaughtyStep(original, modified) {
    let auxo = [], auxm = []
    let mayor = [];
    if (original == modified) return ''
    else {
        auxo = original.split("");
        auxm = modified.split("");

        if (auxo.length > auxm.length) {
            mayor = auxo;
        } else mayor = auxm;

        for (let i = 0; i < mayor.length; i++) {
            if (auxo[i] == undefined) return auxm[i];
            if (auxm[i] == undefined) return auxo[i];
            if (auxo[i] != auxm[i]) return mayor[i];
        }
    }
}

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'