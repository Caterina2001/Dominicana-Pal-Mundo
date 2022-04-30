import { HotelModel } from "./hotel.model"

export class ReservationModel{
    user = ""
    hotel: string | HotelModel = new HotelModel
    totalPrice = 0
    startDate = new Date()
    endingDate = new Date()
    creationDate = new Date()
    roomsQty = 0
}