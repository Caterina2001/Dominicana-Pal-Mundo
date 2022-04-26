import {Schema, model} from 'mongoose'

const schema = new Schema({
    email:{type: String},
    password: {type: String}
})

export const userModel = model('User', schema)