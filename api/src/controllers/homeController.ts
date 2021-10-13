import { Request, Response } from 'express';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
    console.log('teste');
    /*let usuarios = await User.find({

            $gt -> greater than = maior
            $gte -> greater than or equal = maior ou igual
            lt -> lower than = abaixo de

        }).sort({email:-1}).skip(1).limit(2);
        console.log('USUARIOS',usuarios);
        let newUser = new User();
        newUser.name = 'Teste2';
        newUser.email = 'teste2@hotmail.com';
        newUser.password = '1311cvjbsskasfsbfhs';
        newUser.cellPhone = '31988395201';
        let resultado = await newUser.save();
        console.log('Novo Usuario',resultado);*/
    let users = await User.find({}).sort({email:1});
    res.send({
        users
    });
};