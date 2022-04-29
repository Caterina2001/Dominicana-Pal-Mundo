import { Request, Response, Router } from 'express'
import { UserService } from '../services/user.service'
import Authentication from '../utils/authentication.util'

const router = Router()
const service = new UserService()

//Get
router.get('', Authentication.validateToken, (req: Request, res: Response) => {

   service.getAll(req, res)
})

router.get('/:id', Authentication.validateToken, (req: Request, res: Response) => {

   service.getOne(req, res)
})

//Post
router.post('/', Authentication.validateToken, (req: Request, res: Response) => {

   service.addOne(req, res)
})

router.post('/signUp', (req: Request, res: Response) => {

   service.signUp(req, res)
})

router.post('/signIn', (req: Request, res: Response) => {

   service.signIn(req, res)
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