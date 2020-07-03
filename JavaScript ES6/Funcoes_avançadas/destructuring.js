//ANTIGA
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
//Com objeto
var obj = {
    name: 'Celso'
}
var name = obj.name;

//ASSIGNMENT
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(apple, apple2)
//Com objeto
var obj = {
    name: 'Celso',
    props: {
        age: 23
    }
}
var { name } = obj;
console.log(name);
var {
    props: { age }
} = obj;
console.log(age);

var arr = [{name: 'Apple', type: 'fruit'}];
var [{ name }] = arr;
console.log(name);