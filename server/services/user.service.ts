import { userModel } from '../model/user.model'
import BaseService from './base.service';
import { Request, Response } from 'express'
import PasswordUtil from '../utils/password.util'
import Authentication from '../utils/authentication.util'

export class UserService extends BaseService {

    constructor() {
        super(userModel)
    }

    async signUp(req: Request, res: Response) {

        const { email, password } = req.body

        const newUser = new userModel({
            email: email,
            password: await PasswordUtil.encryptPassword(password)
        })

        await userModel.create(newUser)

        let token = await Authentication.getToken(newUser.id)
        return res.status(200).json({ status: "Added Successfully", authenticate: true, data: newUser, token: token })

    }

    async signIn(req: Request, res: Response){
        const {email, password} = req.body

        const user = await userModel.findOne({email: email})

        if(!user){
            return res.status(401).json({message: "The email doesn't exists"})
        }

        let isPasswordValid = await PasswordUtil.validatePassword(password, user.password)

        if(isPasswordValid)
        {
           let token = await Authentication.getToken(user.id)
            return res.status(200).json({authenticate: true, token: token})
        }
        return res.status(404).json({authenticate: false, token: null, message: "User not found"})

    }
}