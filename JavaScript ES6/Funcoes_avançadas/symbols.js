const uniqueId = Symbol();

//Well known symbols
//Symbol.iterator, Symbol.split, Symbol.toStringTag são usados para
//adicionar propriedades ao Symbol
const arr = [1, 2, 3, 4];
const str = 'Tekur';
const it = arr[Symbol.iterator]();
for (let value of arr) {
    console.log(value)
};
for (let value of str) {
    console.log(value)
};

const obj = {
    value: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.value[i - 1],
                    done: i > this.value.length
                };
            }
        };
    }
};

for (let value of obj) {
    console.log(value);
}

const arr2 = [...obj];
console.log(arr2);