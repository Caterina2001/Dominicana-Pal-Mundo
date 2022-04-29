
import {Schema, model} from 'mongoose'

const schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    hotel: {type: Schema.Types.ObjectId, ref: "Hotel"},
    totalPrice: {type: Number, required: true},
    startDate: {type: Date, required: true},
    endingDate: {type: Date, required: true},
    creationDate: {type: Date, required: true}
})

export const reservationModel = model('Reservation', schema)