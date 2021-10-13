import { Request, Response } from 'express';
import User from '../models/User';

export const addUser = async (req:Request,res:Response) => {
    let newUser = new User();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.cellPhone =req.body.cellPhone;
    try{
        await newUser.save();
        console.log('Usuário adicionado corretamente!');
    }catch(error){
        console.log('Erro ao adicionar o usuário - ', error)
    }
    let resultado =  newUser.save();
    res.redirect('/');
    };
