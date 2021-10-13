import { Request, Response } from 'express';
import Product from '../models/Product';


export const addProduct = async (req:Request,res:Response) => {
    console.log('teste product');
    let newProduct = new Product(req.body);
    newProduct.nome = req.body.nome;
    newProduct.preco = req.body.preco;
    newProduct.quantidade = req.body.quantidade;
    newProduct.tipo = req.body.tipo;
    newProduct.descricao = req.body.descricao;
    newProduct.dtcadastro = req.body.dtcadastro;
    console.log(req.body);
    try{
        await newProduct.save();
        console.log('Produto adicionado com Sucesso!');
    }catch(error){
        console.log('Erro ao adicionar o produto - ', error)
    }
    console.log('Novo Produto',newProduct);
    let products = await Product.find({});
    res.send({
        products
    });
};

/*export const removeProduct = async (req,res) =>{

};*/
