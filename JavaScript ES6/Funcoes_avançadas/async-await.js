//ES7
//Async - Assincrono
const simpleFunc = async function() {
    throw new Error('Oh no!');
    return 12345;
};
//console.log(simpleFunc());
simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Async com await (await = esperar)
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123456);
    }, 1000);
});
const simpleFunc = async () => {
    const data = await asyncTimer();
    const dataJSON = await fetch('/data.json').then(resStream => 
        resStream.json()
    );
    return dataJSON;
};
simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });