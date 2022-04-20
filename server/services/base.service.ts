import { Request, Response } from 'express'
import { Model } from 'mongoose'

export default class BaseService {

    model: any

    constructor(newModel: Model<any>) {
        this.model = newModel
    }

    async getAll(req: Request, res: Response) {

        const data = await this.model.find()
        return res.status(200).json(data)
    }

    async addOne(req: Request, res: Response) {
        const data = req.body
        await this.model.create(data)
        return res.status(200).json({"Status": "Added successfully", "Data": data})
    }

    async getOne(req: Request, res:Response){
        const {id} = req.params
        const data = await this.model.findById(id).exec()
        return res.status(200).json(data)
    }

    async put(req: Request, res: Response){
        const {id} = req.params
        const data = req.body
        await this.model.findByIdAndUpdate(id, {$set:data}, {new:true})
        return res.status(200).json({"Status": "Updated successfully", "Data": data})
    }

    
    async deleteOne(req: Request, res: Response){
        const {id} = req.params
        await this.model.findByIdAndDelete(id)
            return res.status(200).json({"Status": "Deleted successfully"})
    }
}