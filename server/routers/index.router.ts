import {Router} from 'express'
import TestService from '../services/test.service'
import {Request, Response} from 'express'

const router = Router()
const service = new TestService()

router.get('', (req: Request, res:Response) =>{
   service.getAll(req, res)
})

router.post('/', (req: Request, res:Response) =>{
    service.addOne(req, res)
 })

 router.get('/:id', (req: Request, res:Response) =>{
    service.getOne(req, res)
 })

 router.put('/:id', (req: Request, res:Response) =>{
   service.put(req, res)
})

 router.delete('/:id', (req: Request, res:Response) =>{
   service.deleteOne(req, res)
})



export default router