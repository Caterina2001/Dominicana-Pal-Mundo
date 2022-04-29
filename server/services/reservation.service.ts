import BaseService from './base.service'
import { reservationModel } from '../model/reservation.model'
import {hotelModel} from '../model/hotel.model'
import {userModel} from '../model/user.model'
import { Request, Response } from 'express'
import {Schema, model} from 'mongoose'

export default class ReservationService extends BaseService {

    constructor() {
        super(reservationModel)
    }

    async addReservation(req: Request, res: Response){

        const user = await userModel.findById(req.body.user)
        const hotel = await hotelModel.findById(req.body.hotel)

        const newReservation = new reservationModel({
            user: user._id,
            hotel: hotel._id,
            totalPrice: req.body.totalPrice,
            startDate: req.body.startDate,
            endingDate: req.body.endingDate,
            creationDate: req.body.creationDate
        })

        newReservation.save().then((data: any) => {
            return res.status(200).json({"Status": "Added successfully", "Data": data})
        }).catch((err: any) => {
            return res.status(400).json({"Status": "Error", "Error": err})

        })
    }

    async getAllReservation(req: Request, res: Response) {

        reservationModel.find().populate("user").populate("hotel").exec((error, data) => {
            if (error) {
                return res.status(400).json({message: "Error", error: error})
            }
            return res.status(200).json(data)
        })
    }
}