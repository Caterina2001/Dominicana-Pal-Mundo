import {Request, Response} from 'express'

export default class Authentication{

   static JsonWebToken = require("jsonwebtoken")

   static async getToken(id:any){
        
        let token = this.JsonWebToken.sign({id: id}, process.env.SECRET, {
            expiresIn: 60 * 60 * 24
        })

        return token
    }

    static async decodeToken(token: any){

        const decodedToken = this.JsonWebToken.verify(token, process.env.SECRET)
        return decodedToken
    }

    static validateToken(req: Request, res: Response, next:any){
        const token = req.headers['x-access-token']

        if (!token) {
           return res.status(401).json({
              authenticate: false,
              message: "Not token provided"
           })
        }
        
        next()
    }
}