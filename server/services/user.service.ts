import { userModel } from '../model/user.model'
import BaseService from './base.service'
import { Request, Response } from 'express'
import PasswordUtil from '../utils/password.util'
import Authentication from '../utils/authentication.util'
import { token } from 'morgan'

export class UserService extends BaseService {

    constructor() {
        super(userModel)
    }

    async signUp(req: Request, res: Response) {

        const { password } = req.body

        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            countryOfResidence: req.body.countryOfResidence,
            role: req.body.role,
            password: await PasswordUtil.encryptPassword(password)
        })

        await userModel.create(newUser)

        let token = await Authentication.getToken(newUser.id)
        const id = await Authentication.decodeToken(token)
        const register = await userModel.findById(id.id, {password: 0})
        return res.status(200).json({ status: "Added Successfully", authenticate: true, data: register, token: token })

    }

    async signIn(req: Request, res: Response) {
        const { email, password } = req.body

        const user = await userModel.findOne({ email: email })

        if (!user) {
            return res.status(401).json({ message: "The email doesn't exists" })
        }

        let isPasswordValid = await PasswordUtil.validatePassword(password, user.password)

        if (isPasswordValid) {
            let token = await Authentication.getToken(user.id)
            const id = await Authentication.decodeToken(token)
            const register = await userModel.findById(id.id, {password: 0})
            return res.status(200).json({ authenticate: true, token: token, user: register })
        }

      
        return res.status(404).json({ authenticate: false, token: null, message: "User not found" })

    }
}