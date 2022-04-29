import {Schema, model} from 'mongoose'

const schema = new Schema({
    name: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    pricePerDay: {type: Number, required: true, default: 0.00},
    totalDays: {type: Number, required: true},
    places: {type: Array, required: true},
    events: {type: Array, required: true},
    startDate: {type: Date, required: true},
    endingDate: {type: Date, required: true},
    creationDate: {type: Date, required: true}
})

export const touristItineraryModel = model('TouristItinerary', schema)