var random = [20, 68, 95, 87, 35, 18, 42, 74, 56];
var min = Math.min(...random);
var max = Math.max(...random);

/*Array.min = function (array) {
    return Math.min.apply(Math, array);
};

Array.max = function (array) {
    return Math.max.apply(Math, array);
};*/

console.log(min)
console.log(max)

module.exports = { min, max }