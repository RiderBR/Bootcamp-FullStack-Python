fetch('http://127.00.0.1:5500/data.json')
    .then(responseStream => responseStream.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro ', err);
    });

//Para mostrar o codigo do erro
fetch('http://127.0.0.1:5500/dataBR.json')
.then(responseStream => {
    console.log(responseStream)
    if (responseStream.status === 200) {
       return responseStream.json();
    } else {
        throw new Error('Request error');
    }
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log('Erro: ', err);
});