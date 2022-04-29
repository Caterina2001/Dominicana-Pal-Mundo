import {Schema, model} from 'mongoose'

const schema = new Schema({
    name:{type: String, required: true},
    location: {type: String, required: true},
    rooms:{type: Number, required: true},
    availableRooms: {type: Number, required: true},
    occupiedRooms:{type: Number, required: true},
    pricePerDay: {type: Number, required: true, default: 0.00},
    RegistrationDate:{type: Date, required: true},
})

export const hotelModel = model('Hotel', schema)