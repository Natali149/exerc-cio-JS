var random = [20, 68, 95, 87, 35, 18, 42, 74, 56];

// Funcao para retornar o menor valor do array
Array.min = function (array) {
    return Math.min.apply(Math, array);
};

// Função para retornar o maior valor do array
Array.max = function (array) {
    return Math.max.apply(Math, array);
};

console.log(Array.min(random));
console.log(Array.max(random)); 