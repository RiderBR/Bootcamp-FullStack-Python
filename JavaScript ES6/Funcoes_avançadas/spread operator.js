const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
    return multiply(...rest);
};
console.log(sum(5, 5, 2, 3));

//O Spread Operator pode ser usado em strings, arrays, literal objects e objetos iteraveis
//string
const str = 'Digital Innovation One';
function logArgs(...args) {
    console.log(args);
};
logArgs(...str);
//array
const str = 'Tekur';
const arr = [1, 2, 3, 4];
function logArgs() {
    console.log(arguments);
};
logArgs(...arr);
//combinações de array mais comum
const arr = [1, 2, 3, 4];
function logArgs(a, b, c) {
    console.log(a, b, c);
};
const arr2 = arr.concat([5, 6, 7]);
console.log(arr2)
//combinação de array com Spread
const arr = [1, 2, 3, 4];
function logArgs(a, b, c) {
    console.log(a, b, c);
};
const arr2 = [...arr, 5, 6, 7];
console.log(arr2);
const arr3 = [...arr2, ...arr, 0, 0, 0];
console.log(arr3);