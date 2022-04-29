import { Request, Response, Router } from 'express'
import  ReservationService from '../services/reservation.service'
import Authentication from '../utils/authentication.util'

const router = Router()
const service = new ReservationService()

//Get
router.get('', Authentication.validateToken, (req: Request, res: Response) => {

   service.getAllReservation(req, res)
})

router.get('/:id', Authentication.validateToken, (req: Request, res: Response) => {

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