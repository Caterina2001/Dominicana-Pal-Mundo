import BaseService from './base.service'
import { touristItineraryModel } from '../model/tourist-itinerary.model'
import { eventModel } from '../model/event.model'
import { Request, Response } from 'express'
import { touristSpotModel } from '../model/tourist-spot.model'

export default class TouristItineraryService extends BaseService {

    constructor() {
        super(touristItineraryModel)
    }

    async addTouristItinerary(req: Request, res: Response) {

        const eventsData = await eventModel.find()
        const spotsData = await touristSpotModel.find()

        const basePrice = req.body.pricePerDay

        const eventsItinerary: any[] = []
        const spotsItinerary: any[] = []

        eventsData.forEach((item) => {
            if (item.price <= basePrice) {
                // console.log(item)
                eventsItinerary.push(item)
           
            }
        })

        spotsData.forEach((item) => {
            if (item.price <= basePrice) {
                spotsItinerary.push(item)
            }
        })

        console.log(eventsItinerary)

        const newItinerary = new touristItineraryModel({
            name: req.body.name,
            user: req.body.id,
            pricePerDay: req.body.pricePerDay,
            totalDays: req.body.totalDays,
            places: spotsItinerary,
            events: eventsItinerary,
            startDate: req.body.startDate,
            endingDate: req.body.endingDate,
            creationDate: req.body.creationDate
        })

        newItinerary.save().then((data: any) => {
            return res.status(200).json({ "Status": "Added successfully", "Data": data })
        }).catch((err: any) => {
            return res.status(400).json({ "Status": "Error", "Error": err })

        })

    }

    async getAllItineraries(req: Request, res: Response) {

        touristItineraryModel.find().exec((error, data) => {
            if (error) {
                return res.status(400).json({message: "Error", error: error})
            } 
            
            const eventsItinerary: any[] = []
            const placesItinerary: any[] = []
            const response: any[] = []

            data.forEach((item:any) => {
                item.events.forEach(async (event: any)=>{
                    let data = await eventModel.find({id:event})
                    console.log(data)
                    eventsItinerary.push(data)
                    item.events = eventsItinerary
                })

                item.places.forEach(async (place: any)=>{
                    let data = await eventModel.find({id:place})
                    console.log(data)
                    placesItinerary.push(data)
                    item.places = placesItinerary
                })

                response.push(item)
            })

            return res.status(200).json(response)
        })
    }
}
