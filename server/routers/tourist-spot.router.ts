import { Request, Response, Router } from 'express'
import  TouristSpotService from '../services/tourist-spot.service'
import Authentication from '../utils/authentication.util'

const router = Router()
const service = new TouristSpotService()

//Get
router.get('', (req: Request, res: Response) => {

   service.getAll(req, res)
})

router.get('/:id', (req: Request, res: Response) => {

   service.getOne(req, res)
})

//Post
router.post('/', Authentication.validateToken, (req: Request, res: Response) => {

   service.addOne(req, res)
})

//Put
router.put('/:id', Authentication.validateToken, (req: Request, res: Response) => {

   service.put(req, res)
})

//Delete
router.delete('/:id', Authentication.validateToken, (req: Request, res: Response) => {

   service.deleteOne(req, res)
})


export default router