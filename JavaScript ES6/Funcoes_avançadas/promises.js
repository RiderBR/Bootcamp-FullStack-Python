//Promises
const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1500);
});
const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        //did other thing
        resolve('Second data');
    }, 1000);
});
//Temos 3 valores para promises: Pending, Fulfilled, Rejected.
//Modo Sincrono
doSomethingPromise()
    .then(data => {
        console.log(data.split('')); 
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')));
//Modo Assincrono
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});

//Modo Race (O que terminar primeiro sera exibido)
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});