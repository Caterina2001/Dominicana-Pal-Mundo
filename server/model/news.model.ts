import {Schema, model} from 'mongoose'

const schema = new Schema({
    title: {type: String, required: true},
    photo: {type: String, required: false},
    description: {type: String, required: true},
    creationDate: {type: Date, required: true}
})

export const newsModel = model('News', schema)