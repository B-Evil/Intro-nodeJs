//Chamada express
const express = require('express');
const server = express(); 

//http://localhost:5050/hello?nome=parma1&param&=21
// Parâmetros opcionais -> paramaetro de consulta
//query params = ?nome=parma1&param&=21
//Route =>
server.get("/hello", (req, res) => {
    const {nome, idade}= req.query;

    return res.json({
        name: nome, 
        message: `Olá ${nome}`,
        idade: idade

    });
});

//http://localhost:5050/hello/:nome
// Parâmetro obrigatórios -> parametros de rotas.
// Route params = /hello/:nome

server.get('/hello/:nome/:age', (req, res) => {
    const {nome, age} = req.params;

    return res.json({
        nome: nome, 
        message: `Olá ${nome}, tudo bem?`,
        idade: age
    });
});


//localhost: door 8080
server.listen(5050);