import {connection, model, Schema} from 'mongoose';

type productType = {
    name: string,
    preco: number,
    quantidade: number,
    tipo: string,
    dtcadastro: string,
    descricao: string
}
const produtosSchema = new Schema<productType>({
    name: {
       type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    dtcadastro: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
});
const modelName: string = 'Product';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<productType>(modelName, produtosSchema);
