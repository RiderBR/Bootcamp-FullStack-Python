//Array.of
const persons = Array.of['John', 'Cris', 'Jenny'];
persons
const numberAndStrings = Array.of[1, 2, 'strings', 'texto'];
numberAndStrings

//Array
const arr = Array(3);
//[empty x 3]
const arr2 = Array(3, 2);
//[3, 2]
const arrWith3Positons = Array(3);
arrWith3Positons
const personsList = Array['John', 'Cris', 'Jenny'];
personsList

//Array.from
const divs = document.querySelectorAll('div');
//node list
const divArr = Array.from(divs);

//Push
const frutas = ['melancia', 'banana'];
frutas.push('laranja');
frutas

//Pop
const frutas = ['melancia', 'banana', 'laranja'];
frutas.pop();
console.log(frutas)

//Unsift
const frutas = ['melancia', 'banana'];
frutas.unshift('laranja');
frutas

//Shift
const frutas = ['laranja', 'melancia', 'banana'];
frutas.shift();
console.log(frutas)

//Concat
const frutas = ['melancia', 'banana'];
const salgados = ['coxinha', 'kibe', 'empada'];
const alimentos = frutas.concat(salgados);
console.log(alimentos)

//Slice
const arr = [1, 2, 3, 4, 5];
arr.slice(0, 2);
// [1, 2]
arr.slice(2);
// [3, 4, 5]
arr.slice(-1);
// [5]
arr.slice(-3);
// [3, 4, 5]

//Splice
const arr = [1, 2, 3, 4, 5];
arr.splice(2);
// [3, 4, 5] removidos
console.log(arr);
// [1, 2]
arr.splice(0, 0, 'first');
//(posição, quantidade de itens a serem removidos, item a ser adicionado)
//[]
console.log(arr);
// ["first", 1, 2] - Adicionado a palavra first

//forEach
const frutas = ['laranja', 'melancia', 'banana'];
frutas.forEach((fruta, index) => console.log(index, fruta));

//Map
const arr = [1, 2, 3, 4, 5];
arr.map(value => value * 2);
// [2, 4, 6, 8, 10]

//Flat
const arr = [1, 2, [3, 4]];
arr.flat(/*quantidade de array a descer*/ );
//[1, 2, 3, 4]

//FlatMap
const arr = [1, 2, 3, 4];
arr.flatMap(value => [value * 2]);
// [2, 4, 6, 8]
arr.flatMap(value => [[value * 2]]);
//[[2], [4], [6], [8]]

//Keys
const arr = [1, 2, 3, 4];
const arrIterator = arr.keys();
arrIterator.next();
// {value: 0, done: false}
arrIterator.next();
// {value: 1, done: false}
arrIterator.next();
// {value: 2, done: false}
arrIterator.next();
// {value: 3, done: true}

//Values
const arr = [1, 2, 3, 4];
const arrIterator = arr.values();
arrIterator.next();
// {value: 1, done: false}
arrIterator.next();
// {value: 2, done: false}
arrIterator.next();
// {value: 3, done: false}
arrIterator.next();
// {value: 4, done: true}

//Entries
const arr = [1, 2, 3, 4];
const arrIterator = arr.entries();
arrIterator.next();
// {value: [0, 1], done: false}
arrIterator.next();
// {value: [1, 2], done: false}
arrIterator.next();
// {value: [2, 3], done: false}
arrIterator.next();
// {value: [3, 4], done: true}

//Find
const arr = [1, 2, 3, 4];
const firstGreaterThanTwo = arr.find(value => value > 2);
console.log(firstGreaterThanTwo);
// 3

//FindIndex
const arr = [1, 2, 3, 4];
const firstGreaterThanTwo = arr.findIndex(value => value > 2);
console.log(firstGreaterThanTwo);
// 2

//Filter
const arr = [1, 2, 3, 4];
const allValuesGreaterThanTwo = arr.filter(value => value > 2);
console.log(allValuesGreaterThanTwo);
// [3, 4]

//IndexOf
const arr = [1, 3, 3, 4, 3];
const firstIndexOfItem = arr.indexOf(3);
console.log(indexOf)
//1

//LastIndexOf
const arr = [1, 3, 3, 4, 3];
const LastIndexOfItem = arr.lastIndexOf(3);
console.log(lastIndexOf);
//4

//Includes
const arr = [1, 3, 3, 4, 3];
const hasItemOne = arr.includes(1);
console.log(hasItemOne);
// true
const hasItemTwo = arr.includes(2);
// false

//Some
const arr = [1, 3, 3, 4, 3];
const hasSomeEvenNumber = arr.some(value => value % 2 === 0);
console.log(hasSomeEvenNumber);
// true

//Every
const arr = [1, 3, 3, 4, 3];
const allEvenNumbers = arr.every(value => value % 2 === 0);
// false

//Sort
const arr = [1, 3, 2, 5, 4];
arr.sort();
// [1, 2, 3, 4, 5]
arr.reverse();
// [5, 4, 3, 2, 1]

//Join
const arr = [1, 2, 3, 4, 5];
arr.join('-');
// "1-2-3-4-5"

//Reduce
const arr = [1, 2, 3, 4, 5];
arr.reduce((total, value) => total += value, 0);
//15 (1 + 2 + 3 + 4 + 5 = 15)