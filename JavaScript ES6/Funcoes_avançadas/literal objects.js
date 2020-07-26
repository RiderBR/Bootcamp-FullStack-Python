//objetos literais não podem interagir com arrays de forma crua
const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2);

//clone
const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};
const obj2 = { ...obj.subObj };
obj2.subObj.test = 456;
console.log(obj2);