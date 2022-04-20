import {Schema, model} from 'mongoose'

const schema = new Schema({
    name: {type: String}
})

export const testModel = model('Test', schema)