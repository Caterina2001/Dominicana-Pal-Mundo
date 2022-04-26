import { Router } from 'express'
import { Request, Response } from 'express'
import { UserService } from '../services/user.service'
import Authentication from '../utils/authentication.util'

const router = Router()
const service = new UserService()

router.get('', (req: Request, res: Response) => {
   
   service.getAll(req, res)
})

router.post('/', (req: Request, res: Response) => {

   service.addOne(req, res)
})


router.post('/signUp', (req: Request, res: Response) => {

   service.signUp(req, res)
})

router.post('/signIn', (req: Request, res: Response) => {

   service.signIn(req, res)
})

router.get('/:id', Authentication.validateToken, (req: Request, res: Response) => {

   service.getOne(req, res)
})

router.put('/:id', (req: Request, res: Response) => {

   service.put(req, res)
})

router.delete('/:id', (req: Request, res: Response) => {

   service.deleteOne(req, res)
})


export default router