import {connection, model, Schema} from 'mongoose';

type productType = {
    name?: string,
    price?: number,
    amount?: number,
    typeProduct?: string,
    dtregistration?: string,
    description?: string
}
const produtosSchema = new Schema<productType>({
    name: {
       type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    typeProduct: {
        type: String,
        required: true
    },
    dtregistration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});
const modelName: string = 'Product';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<productType>(modelName, produtosSchema);
