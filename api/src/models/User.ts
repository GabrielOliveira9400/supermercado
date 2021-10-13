import {connection, model, Schema} from 'mongoose';

type userType = {
    email: string,
    name: string,
    password: string,
    cellPhone: string,
}
const schema = new Schema<userType>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cellPhone: {
        type: String,
        required: true
    }
});
/*
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cellPhone: {
        type: String,
        required: true
    }
});*/
/*module.exports = mongoose.model('users', usersSchema);*/


const modelName: string = 'User';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<userType>(modelName, schema);
