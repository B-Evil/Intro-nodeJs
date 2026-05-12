const express = require("express");
const server = express();

server.use(express.json()); 

let produtos = [
    {id: 1, name: "Placa de vídeo", preco: 340}, 
    {id: 2, name: "Placa mãe", preco: 210}, 
    {id: 3, name: "WaterCooler", preco: 90}
]

server.get("/produtos", (req, res) => {
    return res.json(produtos);
});

server.get("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(item => item.id === id)
    const status = produto ? 200 : 404;
    return res.status(status).json(produto);
});

server.post("/produtos", (req, res) => {
    const {name, preco} = req.body;
    let nextId = 0;
    if(produtos.length === 0){
        nextId = 1;
    }else{
        nextId = produtos[produtos.length - 1].id + 1;
    }

    const newProduto = {id: nextId, name: name, preco: preco};
    produtos.push(newProduto);

    return res.status(201).json(newProduto);
});

server.put("/produtos/:id", (req, res) => {
    const {name, preco} = req.body;
    const id = parseInt(req.params.id); 

    const index = produtos.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404; 

    if(index >= 0){
        produtos[index] = {id: parseInt(id), name: name, preco: preco};
    }
    return res.status(status).json(produtos[index]);
});

server.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404; 

    if(index >= 0){
        produtos.splice(index, 1);
    }
    return res.status(status).json();
});

server.listen();