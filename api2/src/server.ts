import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import {mongoConnect} from "./database/mongo";

dotenv.config();
mongoConnect();
const server = express();

server.use(express.urlencoded({extended: true}));
server.use(apiRoutes);
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT);