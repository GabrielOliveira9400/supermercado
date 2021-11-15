import { Request, Response } from 'express';
import Product from '../models/Product';
import bodyParser from "body-parser";
import User from "../models/User";


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
    res.status(201);
    res.json({
        newProduct
    });
};

export const removeProduct = async (req:Request,res:Response) => {
    let { _id } = req.params

    let delete_product = await Product.findById({ _id });
    try{
        await delete_product.deleteOne();
        res.json({
            alert: 'Produto deletado com Sucesso!'
        });
    }catch(error){
        console.log('Erro ao deletar o produto - ', error)
    }

};

export const allProduct = async (req:Request,res:Response) => {
    let allProducts = await Product.find({});
    res.json(
        allProducts
    )
};

export const getProduct = async(req:Request,res:Response) =>{
    let { _id } = req.params
    console.log(_id);
    let get_Product = await Product.findById({ _id });

    if(get_Product){
        res.json({
            get_Product
        })
    }
    else{
        res.json({
           error: 'Produto Não Encontrado'
        });
    }
}

export const updateProduct = async (req:Request,res:Response) => {
    let { _id } = req.params;
    let {name,price,typeProduct,amount,description,dtregistration} = req.body;
    let update_product = await Product.findById({ _id });

    if(update_product){
        update_product.name = name;
        update_product.price = price;
        update_product.typeProduct = typeProduct;
        update_product.amount = amount;
        update_product.description = description;
        update_product.dtregistration = dtregistration;

        await update_product.save();
        res.json({
            update_product
        })
    }
    else{
        res.json({
            error: 'Produto Não Encontrado'
        });
    }

}