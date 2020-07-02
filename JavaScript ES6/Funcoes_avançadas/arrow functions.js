//Function anonima antiga
var sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 5));

//Arrow Functions
var sum = (a, b) => a + b;

console.log(sum(5, 5));

var log = value => {
    console.log(value);
};

log('teste')

//Referenciando o proprio objeto
var obj = {
    showContext: function showContext() {
        this.log('teste');
    },
    log: function log(value) {
        console.log(value)
    }
};

obj.showContext();

/*Além de varias simplicidades adicionados no ES6, com a nova versão do JS não é mais preciso adicionar
o bind no código para executar, como por exemplo uma função de timeout.*/
var obj = {
    showContext: function showContext() {
        //this = obj
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();