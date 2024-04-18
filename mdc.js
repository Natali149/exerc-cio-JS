function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let n1 = 9;
let n2 = 27;
let resultado = calcularMDC(n1, n2);
console.log(`MDC de ${n1} e ${n2}: ${resultado}`);


module.exports = { resultado }