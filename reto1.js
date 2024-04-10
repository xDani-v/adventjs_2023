function findFirstRepeated(gifts) {
    let aux = [];
    if (gifts.length == 0) return -1;
    for (let i = 0; i < gifts.length; i++) {
        if (!aux.includes(gifts[i])) {
            aux.push(gifts[i])
        } else {
            return gifts[i];
        }
        if (aux.length === gifts.length) return -1;
    }
}