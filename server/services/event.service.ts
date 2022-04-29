import BaseService from './base.service'
import {eventModel} from '../model/event.model'
import {Request, Response} from 'express'

export default class EventService extends BaseService{

    constructor(){
        super(eventModel)
    }

    async addEvent(req: Request, res: Response) {
        const data = req.body
        console.log(req.file?.path)
        // if(req.body.photo)
        // {
        //     data.photo = req.file?.path
        //     console.log(first)
        // }
        // await this.model.create(data)
        // return res.status(200).json({"Status": "Added successfully", "Data": data})
    }
}