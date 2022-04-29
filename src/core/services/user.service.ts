import { BaseService } from '@/core/services/base.service'
import { SignInModel, SignUpModel } from '@/core/models/user.model'
import settings from '@/core/utils/settings.util'
import axios from 'axios'

export default class UserService extends BaseService<SignUpModel>
{
    constructor() {
        super("user")
    }

    async signIn(model: SignInModel) {
        const data = await axios.post("http://localhost:3000/api/user/" + "signIn", model, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return data.data
    }

    async signUp(model: SignUpModel) {
        const data = await axios.post("http://localhost:3000/api/user/" + "signUp", model, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return data.data
    }
}