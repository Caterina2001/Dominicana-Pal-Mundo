import {Schema, model} from 'mongoose'

const schema = new Schema({
    name:{type: String, required: true},
    countryOfResidence:{type: String, required: true},
    role: {type: String, required: true, default: "Registered"},
    email:{type: String, required: true},
    password: {type: String, required: true},
})

export const userModel = model('User', schema)