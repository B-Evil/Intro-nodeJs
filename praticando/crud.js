//Chamada express
const express = require('express'); 
const server = express(); 

server.use(express.json());

let produtos = [
    {id: 1, name: "Placa de vídeo", preco: 2300},
    {id: 2, name: "Placa mãe", preco: 1100}, 
    {id: 3, name: "Monitor AOC 144Hz", preco: 840}
];

//Rota para listagem de produtos ->>
server.get('/produtos', (req, res) =>{
    const index = produtos.length; 
    const status = index > 0 ? 200 : 404;

    return res.status(status).json(produtos);
});

// Rota para visualização única... 
server.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(item => item.id === id);
    const status = produto ? 200 : 404;

    console.log(`GET :: /produtos/:id ${JSON.stringify(produto)}`);

    return res.status(status).json(produto);
});

//Rota de criação de Produto (!)
server.post('/produtos', (req, res) => {
    const {name, preco} = req.body; 
    let nextId = 0; 
    
    //caso não houver produtos
    if(produtos.length === 0){
        nextId = 1;
    }else{
        nextId = produtos[produtos.length - 1].id + 1;
    }

    const newProduto = {id: nextId, name, preco};
    produtos.push(newProduto);

    return res.status(201).json(newProduto);
});

server.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const {name, preco} = req.body; 

    const index = produtos.findIndex(item => item.id === id);
    const status = index >= 0 ? 200: 404;
    
    if(index >=0 ){
        produtos[index] = {id, name, preco}; 
    }

    return res.status(status).json(produtos[index]);
}); 

server.delete('/produtos/:id', (req, res) =>{
    const id = parseInt(req.params.id); 
    const index = produtos.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;
    const deleteProduto = produtos[index];
    if(index >= 0){
        produtos.splice(index, 1);
    }

    return res.status(status).json(deleteProduto);
});

server.listen();