import {Schema, model} from 'mongoose'

const schema = new Schema({
    name: {type: String, required: true},
    photo: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    price: {type: Number, required: true, default: 0.00},
    location: {type: String, required: true},
    public: {type: Boolean, required: true},
    allowedAge: {type: Number, required: true},
    description: {type: String, required: true},
    creationDate: {type: Date, required: true}
})

export const touristSpotModel = model('TouristSpot', schema)